import React, { useState } from "react";
import { FaUser, FaAlignJustify, FaUsers, FaUserShield, FaUserTag } from "react-icons/fa6";
import { SubtituloForm } from "eco-unp/ui";
import { Form, FormGroup, FormSelect } from "react-bootstrap";

const DatosBasicos: React.FC = () =>{
    // Simulando datos obtenidos desde la base de datos
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
        nombreConsejoComunitario: ""
    });

    const [tipoEstudio, setTipoEstudio] = useState(""); // Controlar la selección del tipo de estudio

    return (
        <>
            {/* Sección: Datos Personales */}
            <SubtituloForm subtitulo={"Datos Básicos"} icon={FaUser} />
            <Form className="text-start">
                <ul className="list-unstyled">
                    <li><b>Fecha de Llegada:</b> {formData.fechaLlegada}</li>
                    <li><b>Nombre Completo:</b> {formData.nombreCompleto}</li>
                    <li><b>Tipo de Documento:</b> {formData.tipoDocumento}</li>
                    <li><b>Número de Identificación:</b> {formData.numeroIdentificacion}</li>
                    <li><b>Sexo:</b> {formData.sexo}</li>
                    <li><b>Departamento:</b> {formData.departamento}</li>
                    <li><b>Municipio:</b> {formData.municipio}</li>
                    <li><b>Dirección de Residencia:</b> {formData.direccion}</li>
                    <li><b>Teléfono:</b> {formData.telefono}</li>
                </ul>
            </Form>

            {/* Sección: Grupo Poblacional */}
            <SubtituloForm subtitulo={"Grupo Poblacional"} icon={FaUsers} />
            <Form className="text-start">
                <ul className="list-unstyled">
                    <li><b>Tipo de Grupo:</b> {formData.tipoGrupo}</li>
                    <li><b>Subcategoría:</b> {formData.subcategoria}</li>
                    <li><b>Otros Grupos Poblacionales:</b> {formData.otrosGrupos}</li>
                </ul>
            </Form>

            {/* Sección: Factor Diferencial */}
            <SubtituloForm subtitulo={"Factor Diferencial"} icon={FaUserTag} />
            <Form className="text-start">
                <ul className="list-unstyled">
                    <li><b>Género:</b> {formData.genero}</li>
                    <li><b>Orientación Sexual:</b> {formData.orientacionSexual}</li>
                    <li><b>Factor Diferencial:</b> {formData.factorDiferencial}</li>
                    <li><b>Personas a Cargo:</b> {formData.personasACargo}</li>
                    <li><b>¿Posee algún tipo de discapacidad?:</b> {formData.discapacidad}</li>
                    {formData.discapacidad === "Sí" && (
                        <li><b>Tipo de Discapacidad:</b> {formData.tipoDiscapacidad}</li>
                    )}
                    <li><b>¿Se autorreconoce como miembro de algún grupo étnico?:</b> {formData.autorreconocidoEtnico}</li>
                    {formData.autorreconocidoEtnico === "Sí" && (
                        <>
                            <li><b>Grupo Étnico:</b> {formData.grupoEtnico}</li>
                            {formData.grupoEtnico === "Indígena" && (
                                <>
                                    <li><b>Etnia o Grupo Indígena:</b> {formData.etniaIndigena}</li>
                                    <li><b>Resguardo:</b> {formData.resguardo}</li>
                                    <li><b>Comunidad dentro del Resguardo:</b> {formData.comunidadResguardo}</li>
                                    <li><b>Parcialidad:</b> {formData.parcialidad}</li>
                                    <li><b>Comunidad sin registro:</b> {formData.comunidadSinRegistro}</li>
                                </>
                            )}
                            {(formData.grupoEtnico === "Negro" || formData.grupoEtnico === "Afrocolombiano") && (
                                <li><b>Consejo Comunitario:</b> {formData.nombreConsejoComunitario}</li>
                            )}
                        </>
                    )}
                </ul>
            </Form>

            
 </>)
};
export default DatosBasicos;