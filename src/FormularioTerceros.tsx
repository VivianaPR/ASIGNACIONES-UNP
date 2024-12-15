import React, { useState } from "react";
import { FaUser, FaAlignJustify } from "react-icons/fa6";
import { SubtituloForm } from "eco-unp/Ui";
import { Form, FormGroup, Col, Row } from "react-bootstrap";

const FormTerceros: React.FC = () => {
  const [formData] = useState({
    fechaLlegada: "2024-10-29",
    nombreCompleto: "Carlos Pérez",
    tipoDocumento: "Cédula",
    numeroIdentificacion: "123456789",
    sexo: "Masculino",
    departamento: "Tolima",
    municipio: "Ibagué",
    direccion: "Carrera 5 #10-12",
    telefono: "3201234567",
    tipoGrupo: "Grupo Vulnerable",
    subcategoria: "Subcategoría A",
    otrosGrupos: "Grupo Étnico",
    genero: "Masculino",
    orientacionSexual: "Heterosexual",
    factorDiferencial: "Victima del conflicto armado",
    personasACargo: "3",
    discapacidad: "Sí",
    tipoDiscapacidad: "Visual",
    autorreconocidoEtnico: "Sí",
    grupoEtnico: "Indígena",
    etniaIndigena: "Wayuu",
    resguardo: "Resguardo de Uribia",
    comunidadResguardo: "Comunidad Uribia Centro",
    parcialidad: "La Paz",
    comunidadSinRegistro: "Comunidad de Woumain",
    nombreConsejoComunitario: "",
  });

  return (
    <>
      <SubtituloForm
        subtitulo={"Información de la Orden de Trabajo"}
        icon={FaUser}
      />
      <Form className="text-start">
        <ul className="list-unstyled">
          <li>
            <b>Orden de trabajo N°:</b> NPX-001
          </li>
          <br />
          <Row>
            <Col>
              <li>
                <b>Fecha de Solicitud en la UNP:</b> {formData.fechaLlegada}
              </li>
            </Col>
            <Col>
              <li>
                <b>Fecha de recibo Subdirección ER: </b> {formData.fechaLlegada}
              </li>
            </Col>
            <Col>
              <li>
                <b>Fecha de Expedición de la Orden:</b>
                {formData.fechaLlegada}
              </li>
            </Col>
          </Row>
          <br />

          <Row>
            <Col>
              <li>
                <b>Tipo de Identificación:</b> {formData.numeroIdentificacion}
              </li>
            </Col>
            <Col>
              <li>
                <b>Número de Identificación:</b> {formData.numeroIdentificacion}
              </li>
            </Col>
            <Col>
              <li>
                <b>Sexo:</b> {formData.sexo}
              </li>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <li>
                <b>Primer Nombre de la Persona a Evaluar: </b> Lukas
              </li>
            </Col>
            <Col>
              <li>
                <b>Segundo Nombre de la Persona a Evaluar: </b> Felipe
              </li>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <li>
                <b>Primer Apellido de la Persona a Evaluar: </b> Rendón
              </li>
            </Col>
            <Col>
              <li>
                <b>Segundo Apellido de la Persona a Evaluar: </b> Torres
              </li>
            </Col>
          </Row>
        </ul>
      </Form>
      <br />
      <SubtituloForm
        subtitulo={"Información de la Entrevista"}
        icon={FaUser}
      />

    </>
  );
};

export default FormTerceros;
