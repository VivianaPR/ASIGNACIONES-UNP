import React, { useState } from "react";
import { FaUser, FaUsers, FaUserTag } from "react-icons/fa6";
import { SubtituloForm } from "eco-unp/Ui";
import { Form, Table, Button, Card, CardBody } from "react-bootstrap";
import { IoIosArrowDropdownCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const DatosBasicos: React.FC = () => {
    const [formData] = useState({
        fechaLlegada: "2024-10-29",
        nombreCompleto: "Carlos Stiven Hernandez Tarazona",
        tipoDocumento: "Cédula",
        numeroIdentificacion: "123456789",
        sexo: "Masculino",
        departamento: "Tolima",
        municipio: "Ibagué",
        direccion: "Carrera 5 #10-12",
        telefono: "3201234567",
        tipoGrupo: "Víctimas de violaciones a los DDHH e infracciones al DIH, incluyendo dirigentes, líderes, representantes de Organizaciones de población desplazada o de reclamantes de tierras en situación de riesgo extraordinario o extremo.",
        subcategoria: "Dirigente, representante y líder de población desplazada.",
        otrosGrupos: "Persona reclamante de tierras.",
        genero: "Masculino",
        orientacionSexual: "Heterosexual",
        factorDiferencial: "Víctima del conflicto armado",
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

    const [showDatosPersonales, setShowDatosPersonales] = useState(false);
    const [showGrupoPoblacional, setShowGrupoPoblacional] = useState(false);
    const [showFactorDiferencial, setShowFactorDiferencial] = useState(false);

    return (
        <>
            <div className="item_container">
                <div className="tittle-container-modal">
                    <SubtituloForm subtitulo={"Datos Básicos"} icon={FaUser} />
                    <Button
                        variant="link"
                        onClick={() => setShowDatosPersonales(!showDatosPersonales)}
                    >
                        {showDatosPersonales ? (
                            <IoIosArrowDropdownCircle className="boton-desplegable" />
                        ) : (
                            <IoIosArrowDroprightCircle className="boton-desplegable" />
                        )}
                    </Button>
                </div>
                {showDatosPersonales && (
                    <Form className="text-start">
                        <Table responsive striped className="mb-4">
                            <tbody>
                                <tr>
                                    <th className="text-start">Fecha de Llegada</th>
                                    <td className="text-start">{formData.fechaLlegada}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Nombre Completo</th>
                                    <td className="text-start">{formData.nombreCompleto}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Tipo de Documento</th>
                                    <td className="text-start">{formData.tipoDocumento}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Número de Identificación</th>
                                    <td className="text-start">{formData.numeroIdentificacion}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Sexo</th>
                                    <td className="text-start">{formData.sexo}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Departamento</th>
                                    <td className="text-start">{formData.departamento}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Municipio</th>
                                    <td className="text-start">{formData.municipio}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Dirección</th>
                                    <td className="text-start">{formData.direccion}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Teléfono</th>
                                    <td className="text-start">{formData.telefono}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Form>
                )}
            </div>

            <div className="item_container">
                <div className="tittle-container-modal">
                    <SubtituloForm subtitulo={"Grupo Poblacional"} icon={FaUsers} />
                    <Button
                        variant="link"
                        onClick={() => setShowGrupoPoblacional(!showGrupoPoblacional)}
                    >
                        {showGrupoPoblacional ? (
                            <IoIosArrowDropdownCircle className="boton-desplegable" />
                        ) : (
                            <IoIosArrowDroprightCircle className="boton-desplegable" />
                        )}
                    </Button>
                </div>
                {showGrupoPoblacional && (
                    <Form className="text-start">
                        <Table responsive striped className="mb-4">
                            <tbody>
                                <tr>
                                    <th className="text-start">Población</th>
                                    <td className="text-start">{formData.tipoGrupo}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Subpoblación</th>
                                    <td className="text-start">{formData.subcategoria}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Otras Poblaciones</th>
                                    <td className="text-start">{formData.otrosGrupos}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Form>
                )}
            </div>

            <div className="item_container">
                <div className="tittle-container-modal">
                    <SubtituloForm subtitulo={"Factor Diferencial"} icon={FaUserTag} />
                    <Button
                        variant="link"
                        onClick={() => setShowFactorDiferencial(!showFactorDiferencial)}
                    >
                        {showFactorDiferencial ? (
                            <IoIosArrowDropdownCircle className="boton-desplegable" />
                        ) : (
                            <IoIosArrowDroprightCircle className="boton-desplegable" />
                        )}
                    </Button>
                </div>
                {showFactorDiferencial && (
                    <Form className="text-start">
                        <Table responsive striped className="mb-4">
                            <tbody>
                                <tr>
                                    <th className="text-start">Género</th>
                                    <td className="text-start">{formData.genero}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Orientación Sexual</th>
                                    <td className="text-start">{formData.orientacionSexual}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Factor Diferencial</th>
                                    <td className="text-start">{formData.factorDiferencial}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Personas a Cargo</th>
                                    <td className="text-start">{formData.personasACargo}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">¿Posee algún tipo de discapacidad?</th>
                                    <td className="text-start">{formData.discapacidad}</td>
                                </tr>
                                {formData.discapacidad === "Sí" && (
                                    <tr>
                                        <th className="text-start">Tipo de Discapacidad</th>
                                        <td className="text-start">{formData.tipoDiscapacidad}</td>
                                    </tr>
                                )}
                                <tr>
                                    <th className="text-start">¿Se autorreconoce como miembro de algún grupo étnico?</th>
                                    <td className="text-start">{formData.autorreconocidoEtnico}</td>
                                </tr>
                                {formData.autorreconocidoEtnico === "Sí" && (
                                    <>
                                        <tr>
                                            <th className="text-start">Grupo Étnico</th>
                                            <td className="text-start">{formData.grupoEtnico}</td>
                                        </tr>
                                        {formData.grupoEtnico === "Indígena" && (
                                            <>
                                                <tr>
                                                    <th className="text-start">Etnia o Grupo Indígena</th>
                                                    <td className="text-start">{formData.etniaIndigena}</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-start">Resguardo</th>
                                                    <td className="text-start">{formData.resguardo}</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-start">Comunidad dentro del Resguardo</th>
                                                    <td className="text-start">{formData.comunidadResguardo}</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-start">Parcialidad</th>
                                                    <td className="text-start">{formData.parcialidad}</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-start">Comunidad sin registro</th>
                                                    <td className="text-start">{formData.comunidadSinRegistro}</td>
                                                </tr>
                                            </>
                                        )}
                                        {(formData.grupoEtnico === "Negro" || formData.grupoEtnico === "Afrocolombiano") && (
                                            <tr>
                                                <th className="text-start">Consejo Comunitario</th>
                                                <td className="text-start">{formData.nombreConsejoComunitario}</td>
                                            </tr>
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
