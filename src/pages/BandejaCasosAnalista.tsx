import React from "react";
import Swal from "sweetalert2";
import { VentanaLienzo } from "eco-unp/Ui";
import { BootstrapTable } from "../Tables";
import { columnsRegistrosAnalista } from "./config/TablaRegistrosAnalista";
import { fetchBandejaAnalistaAsignaciones } from "../services/BandejaAnalistaAsignaciones";
import { ModalRegistroAnalista } from "../modals/ModalRegistroAnalista";
import { ModalAsignacionARiesgo } from "../modals/ModalAsignacionARiesgo";
import { decodeUserToken } from "./config/UserToken";


export const BandejaCasosAnalista = () => {

    const token = localStorage.getItem("user_token");
    const [data, setData] = React.useState<any[]>([]);
    const [update, setUpdate] = React.useState(false);

    let idUsrStart: string | null = null;
    
    if (token) {
        idUsrStart = decodeUserToken(token);
    } else {
        console.error("No token found in localStorage");
    }

    const renderAlertContent = (row: Record<string, any>, column: any): void | null => {
        const registro = row.numeroRegistro;
        const estado = '17'; // Para casos tomados por el Analista de Asignaciones
        const idUsrEnd = row.idUsuario;

        if (row.estadoRegistro !== 'en_gestion') {
            Swal.fire({
                title: "<small>¿Está seguro de tomar este registro?</small>",
                text: "Tenga presente que, una vez lo haga, deberá darle trámite en los tiempos definidos en el procedimiento.",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: "#3488C9",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, tomar registro",
                cancelButtonText: "Cancelar"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await getRegistro(registro, estado, idUsrEnd, idUsrStart!);
                    await fetchData();
                    setUpdate(false);
                }
            });
            return null;
        }
        renderModalContent(row, column);
    };

    const getRegistro = async (registro: string, estado: string, idUsrEnd: string, idUsrStart: string) => {

        const url = process.env.REACT_APP_API_EI_ENDPOINT + 'sistema/trazabilidad/registro';

        const data = {
            registro: registro,
            estado: estado,
            idUsrEnd: idUsrEnd,
            idUsrStart: idUsrStart
        };

        try {

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer TU_TOKEN_DE_AUTORIZACION' // Si necesitas autenticación
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const result = await response.json();
            console.log('Respuesta del backend:', result);

        } catch (error) {
            console.error('Error:', error);
        }

    };

    const renderModalContent = (row: Record<string, any>, column: any, onHide?: any) => {
        switch (column.key) {
            case "numeroRegistro":
                return (<ModalRegistroAnalista row={row} update={setUpdate} onHide={onHide} />);
            case "registro_tablaAsignacionARiesgo":
                return (<ModalAsignacionARiesgo update={setUpdate} />);
            default:
                return <p>No hay información adicional disponible.</p>;
        }
    };

    const fetchData = async () => {
        const fetchedData = await fetchBandejaAnalistaAsignaciones(idUsrStart!);
        const combinedData = [
            ...fetchedData.enGestion.map((item: any) => ({ ...item, estadoRegistro: 'en_gestion' })),
            ...fetchedData.porGestionar.map((item: any) => ({ ...item, estadoRegistro: 'por_gestionar' }))
        ];
        console.log(fetchedData, combinedData)
        setData(combinedData);
    };

    React.useEffect(() => {
        fetchData();
        setUpdate(false);
    }, [update]);

    return (
        <VentanaLienzo>
            <div style={{ paddingTop: 30 }}>
                <BootstrapTable
                    columns={columnsRegistrosAnalista}
                    data={data}
                    renderModalContent={renderModalContent}
                    renderAlertContent={renderAlertContent}
                    totalDias={20}
                    subtitle={"Subdirección de Evaluación de Riesgo"}
                    items={"Asignaciones / Analista"}
                    isShared={true}
                />
            </div>
        </VentanaLienzo>
    );

}

export default BandejaCasosAnalista