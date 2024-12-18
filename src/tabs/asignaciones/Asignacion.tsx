import React from "react";
import { BootstrapTable } from "../../Tables";
import { ModalAsignacionARiesgo } from "../../modals/ModalAsignacionARiesgo";
import { columnsRegistrosAnalista } from "../../pages/config/TablaRegistrosAnalista";
import { fetchBandejaLiderAsignaciones } from "../../services/BandejaAnalistaAsignaciones";

export const AsignacionAsignacion: React.FC = () => {

    const [data, setData] = React.useState<any[]>([]);
    const [update, setUpdate] = React.useState(false);

    const renderModalContent = (row: Record<string, any>, column: any) => {
        switch (column.key) {
            case "numeroRegistro":
                return (<ModalAsignacionARiesgo row={row} update={setUpdate} />);
            case "registro_tablaAsignacionARiesgo":
                return (<ModalAsignacionARiesgo />);
            default:
                return <p>No hay información adicional disponible.</p>;
        }
    };

    React.useEffect(() => {

        const fetchData = async () => {
          try {
            const fetchedLiderAsignaciones = await fetchBandejaLiderAsignaciones();
    
            setData(fetchedLiderAsignaciones);

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
    
      }, []);
    

    return (
        <div style={{ paddingTop: 25 }}>
            <BootstrapTable
                columns={columnsRegistrosAnalista}
                data={data}
                renderModalContent={renderModalContent}
                totalDias={30} subtitle={"Subdirección de Evaluación de Riesgo"} items={"Asignaciones / Líder"}
            />
        </div>
    );
};