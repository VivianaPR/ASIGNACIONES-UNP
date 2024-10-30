import { Tabs } from "react-bootstrap";
import { TabVentana, CustomeTable } from "eco-unp/ui";
import { columnsLeader, dataLeader } from "./config/TablaRegistrosLider";
import { ModalRegistroLider } from "../modals/ModalRegistroLider";

export function BandejaCasosLider (){

    const renderModalContent = (row: Record<string, any>, column: any) => {
        switch (column.key) {
            case "registro":
                return (<ModalRegistroLider />);
            default:
                return <p>No hay información adicional disponible.</p>;
        }
    };

    return (
        <Tabs defaultActiveKey={"tab1"}>
            <TabVentana eventKey={"tab1"} title={"Lista de Registros"}>
                <div className="tables-container">
                <CustomeTable 
                columns={columnsLeader} 
                data={dataLeader}
                renderModalContent={renderModalContent}
                totalDias={30}
                ></CustomeTable>
                </div> 
            </TabVentana> 
            <TabVentana eventKey={"tab2"} title={"Asignaciones"}>
                <p>Chao</p>
            </TabVentana>
        </Tabs>
    )
    
    
} 

