import React from "react";
import { FaUser, FaAlignJustify } from "react-icons/fa6";
import { SubtituloForm } from "eco-unp/ui";
import { Form, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { IconBaseProps } from "react-icons";
import { relative } from "path";
import AnexosSolicitante from "../shared/components/Anexos";
import DatosBasicos from "../shared/components/DatosBasicos";
import { Card } from "react-bootstrap";

interface Props {
  row?: any;
  update: any;
}

export const ModalRegistroLider: React.FC<Props> = ({ row, update }) => {
  const send = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/sistema/trazabilidad/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            "registro": row.numeroRegistro,
            "estado": 16 // Cambia el estado a Remitido a Analista de Asignaciones
          }
        )
      });

      const result = await response.json();
      console.log(result);

      if (result.status === "success") {
        update(true);
      } else {
        console.error('Failed to update registro state.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <>
      <SubtituloForm subtitulo={"Analista de Asignaciones "} icon={FaUser} />
      <FormGroup style={{ display: "flex", gap: "1rem" }}>
        <FormSelect>
          <option value="">Seleccione...</option>
          <option value="1">Juan Camilo Medina gutierrez</option>
          <option value="2">Lukas Felipe Rodriguez Lopez</option>
          <option value="3">Andres Julian Perez Sosa</option>
        </FormSelect>

        <button className="btn btn-primary" onClick={send}>Asignar</button>
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
