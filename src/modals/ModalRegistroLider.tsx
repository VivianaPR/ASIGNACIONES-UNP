import React from "react";
import { FaUser, FaAlignJustify } from "react-icons/fa6";
import { SubtituloForm } from "eco-unp/ui";
import { Form, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { IconBaseProps } from "react-icons";
import { relative } from "path";
import AnexosSolicitante from "../shared/components/Anexos";
import DatosBasicos from "../shared/components/DatosBasicos";
import { Card } from "react-bootstrap";

export function ModalRegistroLider(row: any) {
  return (
    <>
      <SubtituloForm subtitulo={"Analista de Asignaciones "} icon={FaUser} />
      <FormGroup style={{ display: "flex", gap: "1rem"}}>
        <FormSelect>
          <option value="">Seleccione...</option>
          <option value="1">Juan Camilo Medina gutierrez</option>
          <option value="2">Lukas Felipe Rodriguez Lopez</option>
          <option value="3">Andres Julian Perez Sosa</option>
        </FormSelect>

        <button className="btn btn-primary">Asignar</button>
      </FormGroup>
      <DatosBasicos></DatosBasicos>
      <AnexosSolicitante ></AnexosSolicitante>
      
      <SubtituloForm subtitulo={"Información del Analista"} icon={FaUser} />
      <Card
        className="w-100 d-flex align-items-center justify-content-center"
        style={{ height: "20rem" }}
      >
        <p style={{ color: "lightgray" }}>
          Información de casos en trámite por el analista de asignaciones
        </p>
      </Card>
    </>
  );
}
