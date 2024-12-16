import React, { useState } from "react";
import { FaUser, FaUsers, FaUserTag } from "react-icons/fa6";
import { SubtituloForm } from "eco-unp/Ui";
import { Form, Table, Button } from "react-bootstrap";
import { IoIosArrowDropdownCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { fetchDatosBasicosPersona } from "../../services/DatosBasicosPersona";

interface Props {
    registro?: string;
    fechaRegistro?: string;
    fechaRecepcion?: string;
  }

const DatosBasicos: React.FC<Props> = ({registro, fechaRegistro, fechaRecepcion}) => {

    const [data, setData] = useState<any[]>([]);
    const [showDatosPersonales, setShowDatosPersonales] = useState(false);
    const [showGrupoPoblacional, setShowGrupoPoblacional] = useState(false);
    const [showFactorDiferencial, setShowFactorDiferencial] = useState(false);

    React.useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await fetchDatosBasicosPersona(registro);
            setData(fetchedData);
        };

        fetchData();

    }, [registro]);

    return (
        <>
      <div className="">
        <div className="modal_subtitle_container">
          <div className="red-section">1</div>
          <span className="modal-subtitle" style={{fontWeight: '500'}}>{registro} - {fechaRegistro} - {fechaRecepcion}</span>
        </div>
      </div>
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
                                    <td className="text-start">{data[0].nombrePersona}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Tipo de identificación</th>
                                    <td className="text-start">{data[0].tipoIdentificacion}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Número de identificación</th>
                                    <td className="text-start">{data[0].numeroIdentificacion}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Fecha de expedición</th>
                                    <td className="text-start">{data[0].fechaExpedicion}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Género</th>
                                    <td className="text-start">{data[0].generoPersona}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">País de nacimiento</th>
                                    <td className="text-start">{}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Departamento de nacimiento</th>
                                    <td className="text-start">{}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Municipio de nacimiento</th>
                                    <td className="text-start">{}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Fecha de nacimiento</th>
                                    <td className="text-start">{}</td>
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
                                    <td className="text-start">{}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Subpoblación</th>
                                    <td className="text-start">{}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Otras Poblaciones</th>
                                    <td className="text-start">{}</td>
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
                                    <td className="text-start">{}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Orientación Sexual</th>
                                    <td className="text-start">{}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Factor Diferencial</th>
                                    <td className="text-start">{}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Personas a Cargo</th>
                                    <td className="text-start">{}</td>
                                </tr>
                                <tr>
                                    <th className="text-start">¿Posee algún tipo de discapacidad?</th>
                                    <td className="text-start">{}</td>
                                </tr>
                                {/* {formData.discapacidad === "Sí" && (
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
                                )} */}
                            </tbody>
                        </Table>
                    </Form>
                )}
            </div>
        </>
    );
};

export default DatosBasicos;
