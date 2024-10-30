import { Tabs } from "react-bootstrap";
import { TabVentana, CustomeTable, VentanaUsuario } from "eco-unp/ui";
import { columnsRegistrosLider, dataRegistrosLider } from "./config/TablaRegistrosLider";
import { columnsAsignacionesLider, dataAsignacionesLider } from "./config/TablaAsignacionesLider";
import { ModalRegistroLider } from "../modals/ModalRegistroLider";
import { ModalAsignacionARiesgo } from "../modals/ModalAsignacionARiesgo";
import { columnsHistoricoLider, dataHistoricoLider } from "./config/TablaHistoricoLider";



export function BandejaCasosLider() {

    const renderModalContent = (row: Record<string, any>, column: any) => {
        switch (column.key) {
            case "registro_tablaRegistrosLider":
                return (<ModalRegistroLider />);
            case "registro_tablaAsignacionARiesgo":
                return (<ModalAsignacionARiesgo />);
            default:
                return <p>No hay información adicional disponible.</p>;
        }
    };

    return (
        <VentanaUsuario>
            <TabVentana eventKey={"tab1"} title={"Registros"}>
                <div className="tables-container">
                    <CustomeTable
                        columns={columnsRegistrosLider}
                        data={dataRegistrosLider}
                        renderModalContent={renderModalContent}
                        totalDias={30}
                    ></CustomeTable>
                </div>
            </TabVentana>

            <TabVentana eventKey={"tab2"} title={"Asignaciones"}>
                <div className="tables-container">
                    <CustomeTable
                        columns={columnsAsignacionesLider}
                        data={dataAsignacionesLider}
                        renderModalContent={renderModalContent}
                        totalDias={30}
                    ></CustomeTable>
                </div>
            </TabVentana>

            <TabVentana eventKey={"tab3"} title={"Histórico"}>
                <div className="tables-container">
                    <CustomeTable
                        columns={columnsHistoricoLider}
                        data={dataHistoricoLider}
                        renderModalContent={renderModalContent}
                        totalDias={30}
                    ></CustomeTable>
                </div>
            </TabVentana>
        </VentanaUsuario>
    )


}

