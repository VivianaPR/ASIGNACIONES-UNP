import React from "react";
import { SubtituloForm } from "eco-unp/ui";
import { FaAlignJustify } from "react-icons/fa6";
import { Card, Row, Col } from "react-bootstrap";
import { hover } from "@testing-library/user-event/dist/hover";

const AnexosSolicitante: React.FC = () => {
  return (
    <>
      <SubtituloForm subtitulo={"Anexos"} icon={FaAlignJustify} />

      <Row className="mb-4">
     
        <Col xs={12} md={6} lg={3}>
          <Card className="px-2 py-2" style={ {cursor: 'pointer'} }>Cedula de Ciudadanía </Card>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Card className="px-2 py-2" style={ {cursor: 'pointer'} }>Formulario de solicitud</Card>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Card className="px-2 py-2" style={ {cursor: 'pointer'} }>Certificado Población Objeto</Card>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Card className="px-2 py-2" style={ {cursor: 'pointer'} }>Otros Documentos Adjuntos</Card>
        </Col>
      </Row>
    </>
  );
};

export default AnexosSolicitante;
