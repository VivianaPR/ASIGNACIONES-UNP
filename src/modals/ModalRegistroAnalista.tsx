import React from "react";
import { FaUser, FaAlignJustify, FaUserShield } from "react-icons/fa6";
import { SubtituloForm } from "eco-unp/ui";
import { Form, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { IconBaseProps } from "react-icons";
import { relative } from "path";
import AnexosSolicitante from "../shared/components/Anexos";
import DatosBasicos from "../shared/components/DatosBasicos";
import { useState } from "react";

export function ModalRegistroAnalista(row: any) {
  const [text, setText] = useState("");
  return (
    <>
      <DatosBasicos></DatosBasicos>
      <AnexosSolicitante></AnexosSolicitante>

      {/* Sección: Tipo de Estudio */}
      <SubtituloForm subtitulo={"Tipo de Estudio"} icon={FaUserShield} />
      <FormGroup className="mt-2 text-start">
        <FormSelect>
          <option value="">Seleccione...</option>
          <option>Estudio por primera vez</option>
          <option>Reevaluación por temporalidad</option>
          <option>Reevaluación por hechos sobrevinientes</option>
          <option>Devolución por CERREM</option>
          <option>Evaluación de riesgo otra solicitud</option>
        </FormSelect>
      </FormGroup>

      <FormGroup>
        <SubtituloForm subtitulo={"Gestión"} icon={FaUser} />
        <FormSelect>
          <option value="0" disabled>
            Seleccione...
          </option>
          <option value="1">Devolver a Servicio al Ciudadano</option>
          <option value="2">Confirmar y enviar a asignación de analista de riesgo</option>
          <option value="3">Remitir a Subdirección Especializada de Protección</option>
        </FormSelect>
      </FormGroup>

      <FormGroup>
        <SubtituloForm subtitulo={"Observación"} icon={FaUser} />
        <Form.Control
          as="textarea"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe aquí una observación sobre el caso..."
        />
      </FormGroup>

      <button
        className="btn btn-primary"
        style={{
          display: "relative",
          position: "absolute",
          bottom: 0,
          right: 0,
          marginBottom: "5px",
          marginRight: "45px",
        }}
      >
        Enviar
      </button>
    </>
  );
}
