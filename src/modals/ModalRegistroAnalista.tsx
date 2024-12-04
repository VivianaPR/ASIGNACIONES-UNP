import React from "react";
import { FaUser, FaAlignJustify, FaUserShield } from "react-icons/fa6";
import { SubtituloForm } from "eco-unp/ui";
import { Form, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { IconBaseProps } from "react-icons";
import { relative } from "path";
import AnexosSolicitante from "../shared/components/Anexos";
import DatosBasicos from "../shared/components/DatosBasicos";
import { useState } from "react";

interface Props {
  row?: any;
  update: any;
}

export const ModalRegistroAnalista: React.FC<Props> = ({row, update}) => {
  const [text, setText] = useState("");

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
            "estado": 19 // Cambia el estado a Remitido a líder de asignaciones para asignar a analista de asignaciones
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
      <DatosBasicos /> 
      <AnexosSolicitante />

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
          <option value="">Seleccione...</option>
          <option value="1">Devolver a Servicio al Ciudadano</option>
          <option value="2">
            Confirmar y enviar a asignación de analista de riesgo
          </option>
          <option value="3">
            Remitir a Subdirección Especializada de Protección
          </option>
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
      <div style={{display: "flex",  justifyContent: "right", marginTop: "1rem"}}>

        <button className="btn btn-primary" onClick={send}>Enviar</button>
      </div>
    </>
  );
}
