import React from "react";
import { TabVentana, BootstrapTable, VentanaUsuario } from "eco-unp/ui";
import { columnsHistoricoLider, dataHistoricoLider } from "./config/TablaHistoricoLider";
import { RegistroAsignacion } from "../tabs/asignacion/Registro";
import { AsignacionAsignacion } from "../tabs/asignacion/Asignacion";



export function BandejaCasosLider() {

    

    return (
        <VentanaUsuario>
            <TabVentana eventKey={"tab1"} title={"Registros"}>
                <RegistroAsignacion />
            </TabVentana>

            <TabVentana eventKey={"tab2"} title={"Asignaciones"}>
                <AsignacionAsignacion />
            </TabVentana>

            <TabVentana eventKey={"tab3"} title={"Histórico"}>
                <div className="tables-container">
                    <BootstrapTable
                        columns={columnsHistoricoLider}
                        data={dataHistoricoLider}
                        // renderModalContent={renderModalContent}
                        totalDias={30} subtitle={"Subdirección de Evaluación de Riesgo"} items={"CETARR"}                    ></BootstrapTable>
                </div>
            </TabVentana>
        </VentanaUsuario>
    )
}