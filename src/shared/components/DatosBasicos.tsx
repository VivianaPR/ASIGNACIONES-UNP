import React, { useState } from "react";
import { FaUser, FaUsers, FaUserTag } from "react-icons/fa6";
import { SubtituloForm } from "eco-unp/ui";
import { Form, Table, Button } from "react-bootstrap";
import { IoIosArrowDropdownCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const DatosBasicos: React.FC = () => {
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

    // Estados para controlar la visibilidad de cada sección, inicialmente en 'false'
    const [showDatosPersonales, setShowDatosPersonales] = useState(false);
    const [showGrupoPoblacional, setShowGrupoPoblacional] = useState(false);
    const [showFactorDiferencial, setShowFactorDiferencial] = useState(false);

    return (
        <>
            <div className='item_container'>
                <div className="tittle-container-modal">
                    <SubtituloForm subtitulo={"Datos Básicos"} icon={FaUser} />
                    <Button variant="link" onClick={() => setShowDatosPersonales(!showDatosPersonales)}>
                        {showDatosPersonales ? <IoIosArrowDropdownCircle className="boton-desplegable" /> : <IoIosArrowDroprightCircle className="boton-desplegable" />}
                    </Button>
                </div>
                {showDatosPersonales && (
                    <Form className="text-start">
                        <Table striped bordered hover>
                            <tbody>
                                <tr><td><b>Fecha de Llegada</b></td><td>{formData.fechaLlegada}</td></tr>
                                <tr><td><b>Nombre Completo</b></td><td>{formData.nombreCompleto}</td></tr>
                                <tr><td><b>Tipo de Documento</b></td><td>{formData.tipoDocumento}</td></tr>
                                <tr><td><b>Número de Identificación</b></td><td>{formData.numeroIdentificacion}</td></tr>
                                <tr><td><b>Sexo</b></td><td>{formData.sexo}</td></tr>
                                <tr><td><b>Departamento</b></td><td>{formData.departamento}</td></tr>
                                <tr><td><b>Municipio</b></td><td>{formData.municipio}</td></tr>
                                <tr><td><b>Dirección de Residencia</b></td><td>{formData.direccion}</td></tr>
                                <tr><td><b>Teléfono</b></td><td>{formData.telefono}</td></tr>
                            </tbody>
                        </Table>
                    </Form>
                )}
            </div>

            <div className='item_container'>
                <div className="tittle-container-modal">
                    <SubtituloForm subtitulo={"Grupo Poblacional"} icon={FaUsers} />
                    <Button variant="link" onClick={() => setShowGrupoPoblacional(!showGrupoPoblacional)}>
                        {showGrupoPoblacional ? <IoIosArrowDropdownCircle className="boton-desplegable" /> : <IoIosArrowDroprightCircle className="boton-desplegable" />}
                    </Button>
                </div>
                {showGrupoPoblacional && (
                    <Form className="text-start">
                        <Table striped bordered hover>
                            <tbody>
                                <tr><td><b>Tipo de Grupo</b></td><td>{formData.tipoGrupo}</td></tr>
                                <tr><td><b>Subcategoría</b></td><td>{formData.subcategoria}</td></tr>
                                <tr><td><b>Otros Grupos Poblacionales</b></td><td>{formData.otrosGrupos}</td></tr>
                            </tbody>
                        </Table>
                    </Form>
                )}
            </div>

            <div className='item_container'>
                <div className="tittle-container-modal">
                    <SubtituloForm subtitulo={"Factor Diferencial"} icon={FaUserTag} />
                    <Button variant="link" onClick={() => setShowFactorDiferencial(!showFactorDiferencial)}>
                        {showFactorDiferencial ? <IoIosArrowDropdownCircle className="boton-desplegable" /> : <IoIosArrowDroprightCircle className="boton-desplegable" />}
                    </Button>
                </div>
                {showFactorDiferencial && (
                    <Form className="text-start">
                        <Table striped bordered hover>
                            <tbody>
                                <tr><td><b>Género</b></td><td>{formData.genero}</td></tr>
                                <tr><td><b>Orientación Sexual</b></td><td>{formData.orientacionSexual}</td></tr>
                                <tr><td><b>Factor Diferencial</b></td><td>{formData.factorDiferencial}</td></tr>
                                <tr><td><b>Personas a Cargo</b></td><td>{formData.personasACargo}</td></tr>
                                <tr><td><b>¿Posee algún tipo de discapacidad?</b></td><td>{formData.discapacidad}</td></tr>
                                {formData.discapacidad === "Sí" && (
                                    <tr><td><b>Tipo de Discapacidad</b></td><td>{formData.tipoDiscapacidad}</td></tr>
                                )}
                                <tr><td><b>¿Se autorreconoce como miembro de algún grupo étnico?</b></td><td>{formData.autorreconocidoEtnico}</td></tr>
                                {formData.autorreconocidoEtnico === "Sí" && (
                                    <>
                                        <tr><td><b>Grupo Étnico</b></td><td>{formData.grupoEtnico}</td></tr>
                                        {formData.grupoEtnico === "Indígena" && (
                                            <>
                                                <tr><td><b>Etnia o Grupo Indígena</b></td><td>{formData.etniaIndigena}</td></tr>
                                                <tr><td><b>Resguardo</b></td><td>{formData.resguardo}</td></tr>
                                                <tr><td><b>Comunidad dentro del Resguardo</b></td><td>{formData.comunidadResguardo}</td></tr>
                                                <tr><td><b>Parcialidad</b></td><td>{formData.parcialidad}</td></tr>
                                                <tr><td><b>Comunidad sin registro</b></td><td>{formData.comunidadSinRegistro}</td></tr>
                                            </>
                                        )}
                                        {(formData.grupoEtnico === "Negro" || formData.grupoEtnico === "Afrocolombiano") && (
                                            <tr><td><b>Consejo Comunitario</b></td><td>{formData.nombreConsejoComunitario}</td></tr>
                                        )}
                                    </>
                                )}
                            </tbody>
                        </Table>
                    </Form>
                )}
            </div>
        </>
    );
};

export default DatosBasicos;
