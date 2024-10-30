import { Tabs } from "react-bootstrap";
import { TabVentana, CustomeTable, VentanaLienzo } from "eco-unp/ui";
import { columnsRegistrosAnalista, dataRegistrosAnalista } from "./config/TablaRegistrosAnalista";
import { ModalRegistroAnalista } from "../modals/ModalRegistroAnalista";

export function BandejaCasosAnalista() {

    const renderModalContent = (row: Record<string, any>, column: any) => {
        switch (column.key) {
            case "registro":
                return (<ModalRegistroAnalista />);
            default:
                return <p>No hay información adicional disponible.</p>;
        }
    };

    return (
        <VentanaLienzo>
        <div className="tables-container">
            <CustomeTable
                columns={columnsRegistrosAnalista}
                data={dataRegistrosAnalista}
                renderModalContent={renderModalContent}
                totalDias={20}
            ></CustomeTable>
        </div>
        </VentanaLienzo>
    )


}

