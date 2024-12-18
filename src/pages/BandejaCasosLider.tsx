import React from "react";
import { TabVentana, VentanaUsuario } from "eco-unp/Ui";
import { BootstrapTable } from "eco-unp/Tables";
import { columnsHistoricoLider, dataHistoricoLider } from "./config/TablaHistoricoLider";
import { AsignacionAsignacion } from "../tabs/asignaciones/Asignacion";
import { ModalRegistroLider } from "../modals/ModalRegistroLider";
import { ModalAsignacionARiesgo } from "../modals/ModalAsignacionARiesgo";


const BandejaCasosLider = () => {

    const renderModalContent = (row: Record<string, any>, column: any) => {
        
        switch (column.key) {
            case "numeroRegistro":
                return (<ModalRegistroLider row={row} />);
            case "registro_tablaAsignacionARiesgo":
                return (<ModalAsignacionARiesgo />);
            default:
                return <p>No hay información adicional disponible.</p>;
        }
    };

    return (
        <VentanaUsuario>
            <TabVentana eventKey={"tab1"} title={"Registros"}>
                <AsignacionAsignacion />
            </TabVentana>

            {/* <TabVentana eventKey={"tab2"} title={"Histórico"}>
                    <BootstrapTable
                        columns={columnsHistoricoLider}
                        data={dataHistoricoLider}
                        renderModalContent={renderModalContent}
                        totalDias={30} subtitle={"Subdirección de Evaluación de Riesgo"} items={"CTAR"}                    ></BootstrapTable>
            </TabVentana> */}
        </VentanaUsuario>
    )
}

export { BandejaCasosLider }