import React from "react";
import { TabVentana, VentanaUsuario } from "eco-unp/Ui";
import { BootstrapTable } from "eco-unp/Tables";
import { columnsHistoricoLider, dataHistoricoLider } from "./config/TablaHistoricoLider";
import { RegistroAsignacion } from "../tabs/asignaciones/Registro";
import { AsignacionAsignacion } from "../tabs/asignaciones/Asignacion";
import { Tabs } from "react-bootstrap";
import { columnsRegistrosLider, dataRegistrosLider } from "./config/TablaRegistrosLider";
import { columnsAsignacionesLider, dataAsignacionesLider } from "./config/TablaAsignacionesLider";
import { ModalRegistroLider } from "../modals/ModalRegistroLider";
import { ModalAsignacionARiesgo } from "../modals/ModalAsignacionARiesgo";


export function BandejaCasosLider() {

    const renderModalContent = (row: Record<string, any>, column: any) => {
        switch (column.key) {
            case "registro_tablaRegistrosLider":
                return (<ModalRegistroLider row={row}/>);
            case "registro_tablaAsignacionARiesgo":
                return (<ModalAsignacionARiesgo />);
            default:
                return <p>No hay información adicional disponible.</p>;
        }
    };

    return (
        <VentanaUsuario>
            {/* <TabVentana eventKey={"tab1"} title={"Registros"}>
                <RegistroAsignacion />
            </TabVentana> */}

            <TabVentana eventKey={"tab2"} title={"Asignaciones"}>
                <AsignacionAsignacion />
            </TabVentana>

            <TabVentana eventKey={"tab3"} title={"Histórico"}>
                    <BootstrapTable
                        columns={columnsHistoricoLider}
                        data={dataHistoricoLider}
                        renderModalContent={renderModalContent}
                        totalDias={30} subtitle={"Subdirección de Evaluación de Riesgo"} items={"CTAR"}                    ></BootstrapTable>
            </TabVentana>
        </VentanaUsuario>
    )
}