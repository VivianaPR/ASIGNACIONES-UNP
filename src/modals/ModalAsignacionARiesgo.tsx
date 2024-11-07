import React from "react";
import { FaUser, FaAlignJustify } from "react-icons/fa6";
import { SubtituloForm } from "eco-unp/ui";
import { Form, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { IconBaseProps } from "react-icons";
import { relative } from "path";
import AnexosSolicitante from "../shared/components/Anexos";
import DatosBasicos from "../shared/components/DatosBasicos";
import { Card } from "react-bootstrap";

export function ModalAsignacionARiesgo(row: any) {
    return (
        <>
            <SubtituloForm subtitulo={"Analista de Riesgo "} icon={FaUser} />
            <FormGroup style={{ display: "flex", gap: "1rem"}}>
                <FormSelect>
                    <option value="">Seleccione...</option>
                    <option value="1">Diego Alejandro Castañeda Herrera</option>
                    <option value="2">Julian Buitrago </option>
                    <option value="3">Carlos Pinzon</option>
                </FormSelect>
                <button className="btn btn-primary">Asignar</button>
            </FormGroup>

            <FormGroup>
                <SubtituloForm subtitulo={"Observación"} icon={FaUser} />
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={""}
                    placeholder="Justifique la asignación..."
                />
            </FormGroup>
            
            <DatosBasicos></DatosBasicos>
            <AnexosSolicitante></AnexosSolicitante>



            <SubtituloForm subtitulo={"Información del Analista de Riesgo"} icon={FaUser} />
            <Card
                className="w-100 d-flex align-items-center justify-content-center"
                style={{ height: "20rem" }}
            >
                <p style={{ color: "lightgray" }}>
                    Información general del Analista de Riesgo
                </p>
            </Card>

        </>
    );
}
