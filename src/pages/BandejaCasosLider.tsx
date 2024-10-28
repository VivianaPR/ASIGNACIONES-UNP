import { Tabs, Tab, Card } from "react-bootstrap";
import { TabVentana, CustomeTable } from "eco-unp/ui";

export function BandejaCasosLider (){

    const columns = [{
        key: '',
        label: '',
    },
    {
        key: '',
        label: '',
    },
    {
        key: '',
        label: '',
    },
    {
        key: '',
        label: '',
    },
    {
        key: '',
        label: '',
    },
    {
        key: '',
        label: '',
    },
    {
        key: '',
        label: '',
    },
    {
        key: '',
        label: '',
    },
    {
        key: '',
        label: '',
    },
    {
        key: '',
        label: '',
    },
    {
        key: '',
        label: '',
    },
    {
        key: '',
        label: '',
    },


        
    ]

    return (
        <Tabs defaultActiveKey={"tab1"}>
            
            <TabVentana eventKey={"tab1"} title={"Lista de Registros"}>
                <CustomeTable columns={[]} data={[]}></CustomeTable>
            </TabVentana>
            
            <TabVentana eventKey={"tab2"} title={"Asignaciones"}>
                <p>Chao</p>
            </TabVentana>

        </Tabs>
    )
    
    
} 

