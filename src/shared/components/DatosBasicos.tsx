import React, { useState } from "react";
import { FaLocationDot, FaUser, FaUsers, FaUserTag, FaPhone } from "react-icons/fa6";
import { SubtituloForm } from "eco-unp/Ui";
import { Form, Table, Button } from "react-bootstrap";
import { IoIosArrowDropdownCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { fetchDatosBasicosPersona } from "../../services/DatosBasicosPersona";
import { fetchPoblacionObjetoPersona } from "../../services/PoblacionObjetoPersona";
import { fetchFactorDiferencialPersona } from "../../services/FactorDiferencialPersona";

interface Props {
    registro?: string;
}

const DatosBasicos: React.FC<Props> = ({ registro }) => {

    const [data, setData] = useState<any>({});
    const [showDatosPersonales, setShowDatosPersonales] = useState(false);
    const [showDatosUbicacion, setShowDatosUbicacion] = useState(false);
    const [showDatosContacto, setShowDatosContacto] = useState(false);
    const [showGrupoPoblacional, setShowGrupoPoblacional] = useState(false);
    const [showFactorDiferencial, setShowFactorDiferencial] = useState(false);

    React.useEffect(() => {
        const fetchData = async () => {
            try {

                const fetchedDatosBasicos = await fetchDatosBasicosPersona(registro);
                const fetchedPoblacion = await fetchPoblacionObjetoPersona(registro);
                const fetchFactorDiferencial = await fetchFactorDiferencialPersona(registro);
    
                const combinedData = {
                    ...fetchedDatosBasicos[0],
                    ...fetchedPoblacion[0],
                    ...fetchFactorDiferencial[0],
                };

                setData(combinedData);

            } catch (error) {
                console.error("Error fetching data:", error);
                setData({});
            }
        };
    
        fetchData();
    }, [registro]);

    return (
        <>
            <div className="item_container">

                <div className="tittle-container-modal">
                    <SubtituloForm subtitulo={"Datos básicos"} icon={FaUser} />
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
                                    <th className="text-start">Nombre completo</th>
                                    <td className="text-start">{data.nombrePersona}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Tipo de identificación</th>
                                    <td className="text-start">{data.tipoIdentificacion}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Número de identificación</th>
                                    <td className="text-start">{data.numeroIdentificacion}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Fecha de expedición</th>
                                    <td className="text-start">{data.fechaExpedicion}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Género</th>
                                    <td className="text-start">{data.generoPersona}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">País de nacimiento</th>
                                    <td className="text-start">{data.paisNacimiento}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Departamento de nacimiento</th>
                                    <td className="text-start">{data.departamentoNacimiento}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Municipio de nacimiento</th>
                                    <td className="text-start">{data.municipioNacimiento}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Fecha de nacimiento</th>
                                    <td className="text-start">{data.fechaNacimiento}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Form>
                )}
            </div>

            <div className="item_container">

                <div className="tittle-container-modal">
                    <SubtituloForm subtitulo={"Datos de contacto"} icon={FaPhone} />
                    <Button
                        variant="link"
                        onClick={() => setShowDatosContacto(!showDatosContacto)}
                    >
                        {showDatosContacto ? (
                            <IoIosArrowDropdownCircle className="boton-desplegable" />
                        ) : (
                            <IoIosArrowDroprightCircle className="boton-desplegable" />
                        )}
                    </Button>
                </div>
                {showDatosContacto && (
                    <Form className="text-start">
                        <Table responsive striped className="mb-4">
                            <tbody>
                                <tr>
                                    <th className="text-start">Celular uno</th>
                                    <td className="text-start">{data.celularUno}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Celular dos</th>
                                    <td className="text-start">{data.celularDos}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Teléfono (celular tres)</th>
                                    <td className="text-start">{data.telefonoUno}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Correo electrónico</th>
                                    <td className="text-start">{data.correoElectronico}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Form>
                )}
            </div>

            <div className="item_container">

                <div className="tittle-container-modal">
                    <SubtituloForm subtitulo={"Datos de ubicación"} icon={FaLocationDot} />
                    <Button
                        variant="link"
                        onClick={() => setShowDatosUbicacion(!showDatosUbicacion)}
                    >
                        {showDatosUbicacion ? (
                            <IoIosArrowDropdownCircle className="boton-desplegable" />
                        ) : (
                            <IoIosArrowDroprightCircle className="boton-desplegable" />
                        )}
                    </Button>
                </div>
                {showDatosUbicacion && (
                    <Form className="text-start">
                        <Table responsive striped className="mb-4">
                            <tbody>
                                <tr>
                                    <th className="text-start">Departamento</th>
                                    <td className="text-start">{data.departamentoUbicacion}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Municipio</th>
                                    <td className="text-start">{data.municipioUbicacion}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Zona</th>
                                    <td className="text-start">{data.zonaUbicacion}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Dirección</th>
                                    <td className="text-start">{data.direccionUbicacion}</td>
                                </tr>

                            </tbody>
                        </Table>
                    </Form>
                )}
            </div>

            <div className="item_container">
                <div className="tittle-container-modal">
                    <SubtituloForm subtitulo={"Población"} icon={FaUsers} />
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
                {showGrupoPoblacional && Object.keys(data).length > 0 && (
                    <Form className="text-start">
                        <Table responsive striped className="mb-4">
                            <tbody>
                                {data.poblacion && data.poblacion.map((item: any, index: number) => (
                                    <tr key={index}>
                                        <th className="text-start">{item.numeroPoblacion}</th>
                                        <td className="text-start">{item.poblacion}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Form>
                )}
            </div>

            <div className="item_container">
                <div className="tittle-container-modal">
                    <SubtituloForm subtitulo={"Factor diferencial"} icon={FaUserTag} />
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
                                    <th className="text-start">Sexo</th>
                                    <td className="text-start">{data.sexo}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Orientación sexual</th>
                                    <td className="text-start">{data.orientacionSexual}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Factor diferencial</th>
                                    <td className="text-start">{data.factorDiferencial}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Rango etario</th>
                                    <td className="text-start">{data.rangoEtario}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Personas a cargo</th>
                                    <td className="text-start">{data.personasCargo}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">¿Posee algún tipo de discapacidad?</th>
                                    <td className="text-start">{data.discapacidad}</td>
                                </tr>
                                {data.discapacidad === "Sí" && (
                                    <tr>
                                        <th className="text-start">Tipo de Discapacidad</th>
                                        <td className="text-start">{data.tipoDiscapacidad}</td>
                                    </tr>
                                )}
                                <tr>
                                    <th className="text-start">¿Se autorreconoce como miembro de algún grupo étnico?</th>
                                    <td className="text-start">{data.autorreconocidoEtnico}</td>
                                </tr>
                                {data.autorreconocidoEtnico === "Sí" && (
                                    <>
                                        <tr>
                                            <th className="text-start">Grupo Étnico</th>
                                            <td className="text-start">{data.grupoEtnico}</td>
                                        </tr>
                                        {data.grupoEtnico === "Indígena" && (
                                            <>
                                                <tr>
                                                    <th className="text-start">Etnia o grupo indígena</th>
                                                    <td className="text-start">{data.etniaIndigena}</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-start">Resguardo</th>
                                                    <td className="text-start">{data.resguardo}</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-start">Comunidad dentro del resguardo</th>
                                                    <td className="text-start">{data.comunidadResguardo}</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-start">Parcialidad</th>
                                                    <td className="text-start">{data.parcialidad}</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-start">Comunidad sin registro</th>
                                                    <td className="text-start">{data.comunidadSinRegistro}</td>
                                                </tr>
                                            </>
                                        )}
                                        {(data.grupoEtnico === "Negro" || data.grupoEtnico === "Afrocolombiano") && (
                                            <tr>
                                                <th className="text-start">Consejo comunitario</th>
                                                <td className="text-start">{data.nombreConsejoComunitario}</td>
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