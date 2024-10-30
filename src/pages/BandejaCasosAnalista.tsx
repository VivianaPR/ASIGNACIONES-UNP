import { Tabs } from "react-bootstrap";
import { TabVentana, CustomeTable } from "eco-unp/ui";
import { columnsRegistrosAnalista, dataRegistrosAnalista } from "./config/TablaRegistrosAnalista";
import { columnsHistoricoAnalista, dataHistoricoAnalista } from "./config/TablaHistoricoAnalista";
import { ModalRegistroAnalista } from "../modals/ModalRegistroAnalista";

export function BandejaCasosAnalista (){

    const renderModalContent = (row: Record<string, any>, column: any) => {
        switch (column.key) {
            case "registro":
                return (<ModalRegistroAnalista />);
            default:
                return <p>No hay información adicional disponible.</p>;
        }
    };

    return (
        <Tabs defaultActiveKey={"tab1"}>
            <TabVentana eventKey={"tab1"} title={"Registros"}>
                <div className="tables-container">
                <CustomeTable 
                columns={columnsRegistrosAnalista} 
                data={dataRegistrosAnalista}
                renderModalContent={renderModalContent}
                totalDias={20}
                ></CustomeTable>
                </div> 
            </TabVentana> 
            <TabVentana eventKey={"tab2"} title={"Histórico"}>
            <div className="tables-container">
                <CustomeTable 
                columns={columnsHistoricoAnalista} 
                data={dataHistoricoAnalista}
                renderModalContent={renderModalContent}
                totalDias={20}
                ></CustomeTable>
                </div> 
            </TabVentana>
        </Tabs>
    )
    
    
} 

