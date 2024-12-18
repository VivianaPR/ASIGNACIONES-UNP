import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6";
import { SubtituloForm } from "eco-unp/Ui";
import { Form, FormGroup, FormLabel, FormSelect, Card, Button, CardBody } from "react-bootstrap";
import AnexosSolicitante from "../shared/components/Anexos";
import DatosBasicos from "../shared/components/DatosBasicos";
import swal from 'sweetalert2'
import { fetchListadoAnalistas } from "../services/GestionLiderAsignaciones";

interface Props {
    row?: any;
    update: any;
}

const ModalAsignacionARiesgo: React.FC<Props> = ({ row, update }) => {
    const registro = row.numeroRegistro;
    const fechaRegistro = row.fechaSolicitudRegistro;
    const fechaRecepcion = row.fechaRecepcionRegistro;

    const [data, setData] = React.useState([]);

    const [text, setText] = React.useState('');

    const [formState, setFormState] = useState({
        asignacion: "", 
        observacion: "",
        devolucion: false,
        observacionDevolucion: ""
    });

    const [errors, setErrors] = useState({
        asignacion: false,
        observacion: false,
        observacionDevolucion: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
        setFormState((prevState) => ({
            ...prevState,
            [name]: checked !== undefined ? checked : value
        }));
        if (errors[name as keyof typeof errors]) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
        }
    };

    const handleAsignar = () => {
        const newErrors = {
            asignacion: !formState.asignacion,
            observacion: formState.asignacion !== "1" && (!formState.observacion.trim() || formState.observacion.trim().length < 100),
            observacionDevolucion: false
        };
        setErrors(newErrors);

        if (Object.values(newErrors).some((error) => error)) {
            return;
        }

        swal.fire({
            title: '¿Está seguro de asignar el caso?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            confirmButtonColor: '#2CAE50',
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#D13C47',
        }).then((result) => {
            if (result.isConfirmed) {
                const dataToSend = {
                    asignacion: formState.asignacion,
                    observacion: formState.observacion
                };
                console.log("Datos enviados al asignar:", dataToSend);
                swal.fire({
                    title: 'Asignación Exitosa',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#2CAE50',
                })
            } else {
                console.log('Asignación cancelada');
            }
        });
    };

    const handleDevolver = () => {
        const newErrors = {
            asignacion: false,
            observacion: false,
            observacionDevolucion: formState.observacionDevolucion.trim().length < 100,
        };
        setErrors(newErrors);

        if (newErrors.observacionDevolucion) {
            return;
        }

        swal.fire({
            title: '¿Está seguro que desea devolver el caso?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            confirmButtonColor: '#2CAE50',
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#D13C47',
        }).then((result) => {
            if (result.isConfirmed) {
                const dataToSend = {
                    devolucion: formState.devolucion,
                    observacionDevolucion: formState.observacionDevolucion
                };
                console.log("Datos enviados al devolver:", dataToSend);
                swal.fire({
                    title: 'Devolución Exitosa',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#2CAE50',
                })
            } else {
                console.log('Devolución cancelada');
            }
        });

    };

    const devolverCaso = async () => {
        const urlTrazabilidad = process.env.REACT_APP_API_EI_ENDPOINT + 'sistema/trazabilidad/registroremitir';

        try {
            const response = await fetch(urlTrazabilidad, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    registro: row.numeroRegistro,
                    estado: 11,
                    obs: text,
                }),
            });

            const result = await response.json();

            if (result.status === 'success') {
                update(true);
            } else {
                console.error('Failed to update registro state.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    React.useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await fetchListadoAnalistas();
            setData(fetchedData);
        }

        fetchData();
        console.log(data)

    }, []);

    return (
        <>
            <div className="">
                <div className="modal_subtitle_container">
                    <div className="red-section">1</div>
                    <span className="modal-subtitle" style={{ fontWeight: '500' }}>{registro} - {fechaRegistro} - {fechaRecepcion}</span>
                </div>
            </div>

            <SubtituloForm subtitulo={"Analista de Riesgo"} icon={FaUser} />
            <FormGroup style={{ display: "flex", gap: "1rem" }}>
                <FormSelect
                    name="asignacion"
                    value={formState.asignacion}
                    onChange={(e) => handleInputChange(e)}
                    isInvalid={errors.asignacion}
                >
                    <option value="">Seleccione...</option>
                    {data.map((analista: any, index: number) => (
                        <option key={analista.id_busuario} value={analista.id_busuario}>
                            {analista.primerNombre + ' ' + analista.segundoNombre + ' ' + analista.primerApellido + ' ' + analista.segundoApellido}
                        </option>
                    ))}
                </FormSelect>
                <Button className="btn btn-primary" onClick={handleAsignar}>
                    Asignar
                </Button>
            </FormGroup>

            {formState.asignacion &&
                <>
                    <SubtituloForm subtitulo={"Información del Analista de Riesgo"} icon={FaUser} />
                    <Card className="w-100 d-flex" style={{ height: "20rem" }} >
                        <CardBody>
                        <p><b>Nombres: </b>{formState.asignacion}</p>
                        <p><b>NUIP: </b>{formState.asignacion}</p>
                        <p><b>Sexo: </b>{formState.asignacion}</p>
                        <p><b>Género: </b>{formState.asignacion}</p>
                        <p><b>Orientación: </b>{formState.asignacion}</p>
                        <p><b>Perfil: </b>{formState.asignacion}</p>
                        </CardBody>
                    </Card>


                    <FormGroup>
                        <SubtituloForm subtitulo={"Observación"} icon={FaUser} />
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="observacion"
                            value={formState.observacion}
                            onChange={(e) => handleInputChange(e)}
                            maxLength={200}
                            placeholder="Justifique la asignación..."
                            isInvalid={errors.observacion}
                        />
                    </FormGroup>
                    <Form.Text muted>
                        {200 - formState.observacion.length} caracteres restantes
                    </Form.Text>
                </>
            }

            <DatosBasicos registro={registro} />
            <AnexosSolicitante />

            <div style={{ display: "flex", gap: "1rem", alignItems: "center", justifyItems: "center" }}>
                <SubtituloForm subtitulo={"¿Desea devolver el caso?"} icon={FaUser} />
                <FormGroup>
                    <Form.Check
                        type="switch"
                        id="devolucion-switch"
                        label={formState.devolucion ? "Sí" : "No"}
                        name="devolucion"
                        checked={formState.devolucion}
                        onChange={(e) => handleInputChange(e)}
                    />
                </FormGroup>
            </div>
            {formState.devolucion && (
                <div style={{ textAlign: "left" }}>
                    <FormGroup>
                        <FormLabel>Observación de Devolución</FormLabel>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="observacionDevolucion"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            maxLength={200}
                            isInvalid={errors.observacionDevolucion}
                            required
                        />
                    </FormGroup>
                    <Form.Text muted>
                        {200 - text.length} caracteres restantes
                    </Form.Text>
                </div>
            )}

            {formState.devolucion && (
                <div style={{ textAlign: "right" }}>
                    <Button
                        variant="danger"
                        className="mt-3"
                        onClick={handleDevolver}
                    >
                        Devolver
                    </Button>
                </div>
            )}
        </>
    );
}

export { ModalAsignacionARiesgo };