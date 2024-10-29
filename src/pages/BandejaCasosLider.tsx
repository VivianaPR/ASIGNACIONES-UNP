import { Tabs } from "react-bootstrap";
import { TabVentana, CustomeTable } from "eco-unp/ui";
import { columnsLeader, dataLeader } from "./config/BandejaLider";
import { ModalRegistro } from "../modals/ModalRegistro";

export function BandejaCasosLider (){

    const renderModalContent = (row: Record<string, any>, column: any) => {
        switch (column.key) {
            case "registro":
                return (<ModalRegistro></ModalRegistro>);
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

