import React from "react";
import Swal from "sweetalert2";
import { VentanaLienzo } from "eco-unp/Ui";
import { BootstrapTable } from "../Tables";
import { columnsRegistrosAnalista } from "./config/TablaRegistrosAnalista";
import { fetchBandejaAnalistaAsignaciones } from "../services/BandejaAnalistaAsignaciones";
import { ModalRegistroAnalista } from "../modals/ModalRegistroAnalista";
import { ModalAsignacionARiesgo } from "../modals/ModalAsignacionARiesgo";
import WebSocketComponent from "../WebSocketComponent";

const userId = "28d73cb5-3b48-4e23-bb93-f301fc2d3aa2";

export const BandejaCasosAnalista = () => {
    const [data, setData] = React.useState<any[]>([]);
    const [update, setUpdate] = React.useState(false);
    const [selectedRegistro, setSelectedRegistro] = React.useState<string | null>(null);

    const renderAlertContent = (row: Record<string, any>, column: any): void | null => {
        const registro = row.numeroRegistro;
        const estado = '17'; // Para casos tomados por el Analista de Asignaciones
        const idUsrEnd = row.idUsuario;
        const idUsrStart = userId;

        if (row.idUsuario !== userId) {
            Swal.fire({
                title: "<small>¿Está seguro de tomar este registro?</small>",
                text: "Tenga presente que, una vez lo haga, deberá darle trámite en los tiempos definidos en el procedimiento.",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: "#3488C9",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, tomar registro",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    getRegistro(registro, estado, idUsrEnd, idUsrStart);
                    fetchData();
                    setUpdate(false);
                }
            });
            return null;
        }
        setSelectedRegistro(registro); // Establece el registro seleccionado
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

    const renderModalContent = (row: Record<string, any>, column: any) => {
        switch (column.key) {
            case "registro":
                return (<ModalRegistroAnalista row={row} update={setUpdate} />);
            case "registro_tablaAsignacionARiesgo":
                return (<ModalAsignacionARiesgo />);
            default:
                return <p>No hay información adicional disponible.</p>;
        }
    };

    const fetchData = async () => {
        const fetchedData = await fetchBandejaAnalistaAsignaciones();
        const combinedData = [
            ...fetchedData.enGestion.map((item: any) => ({ ...item, estadoRegistro: 'en_gestion' })),
            ...fetchedData.porGestionar.map((item: any) => ({ ...item, estadoRegistro: 'por_gestionar' }))
        ];
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
                    items={"Grupo Cuerpo Técnico de Análisis de Riesgo (CTAR)"}
                    isShared={true}
                />
                      <div style={{display:'none'}}>
                        {selectedRegistro && <WebSocketComponent registro={selectedRegistro} />}
                      </div>
            </div>
        </VentanaLienzo>
    );
};

export default BandejaCasosAnalista;