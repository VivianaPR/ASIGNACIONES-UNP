import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { SubtituloForm } from "eco-unp/ui";
import { Form, FormGroup, FormLabel, FormSelect, Card, Button } from "react-bootstrap";
import AnexosSolicitante from "../shared/components/Anexos";
import DatosBasicos from "../shared/components/DatosBasicos";

export function ModalAsignacionARiesgo(row: any) {
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
            observacion: formState.asignacion !== "1" && !formState.observacion.trim(),
            observacionDevolucion: false // No aplica para asignar
        };
        setErrors(newErrors);

        if (Object.values(newErrors).some((error) => error)) {
            return;
        }

        const dataToSend = {
            asignacion: formState.asignacion,
            observacion: formState.observacion
        };
        console.log("Datos enviados al asignar:", dataToSend);
        alert("Asignación Exitosa");
    };

    const handleDevolver = () => {
        const newErrors = {
            asignacion: false, // No aplica para devolver
            observacion: false, // No aplica para devolver
            observacionDevolucion: !formState.observacionDevolucion.trim()
        };
        setErrors(newErrors);

        if (newErrors.observacionDevolucion) {
            return;
        }

        const dataToSend = {
            devolucion: formState.devolucion,
            observacionDevolucion: formState.observacionDevolucion
        };
        console.log("Datos enviados al devolver:", dataToSend);
        alert("Devolución Exitosa");
    };

    return (
        <>
            <SubtituloForm subtitulo={"Analista de Riesgo"} icon={FaUser} />
            <FormGroup style={{ display: "flex", gap: "1rem" }}>
                <FormSelect
                    name="asignacion"
                    value={formState.asignacion}
                    onChange={(e) => handleInputChange(e)}
                    isInvalid={errors.asignacion}
                >
                    <option value="">Seleccione...</option>
                    <option value="1">Diego Alejandro Castañeda Herrera</option>
                    <option value="2">Julian Buitrago</option>
                    <option value="3">Carlos Pinzon</option>
                </FormSelect>
                <Button className="btn btn-primary" onClick={handleAsignar}>
                    Asignar
                </Button>
            </FormGroup>

            <SubtituloForm subtitulo={"Información del Analista de Riesgo"} icon={FaUser} />
            <Card
                className="w-100 d-flex align-items-center justify-content-center"
                style={{ height: "20rem" }}
            >
                <p style={{ color: "lightgray" }}>
                    Información general del Analista de Riesgo
                </p>
            </Card>

            <FormGroup>
                <SubtituloForm subtitulo={"Observación"} icon={FaUser} />
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="observacion"
                    value={formState.observacion}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Justifique la asignación..."
                    isInvalid={errors.observacion}
                />
            </FormGroup>

            <DatosBasicos />

            <AnexosSolicitante />

            <div>
                <span>
                    Devolución
                </span>
                <FormGroup className="mt-4">
                    <Form.Check
                        type="switch"
                        id="devolucion-switch"
                        label={formState.devolucion ? "Sí" : "No"}
                        name="devolucion"
                        checked={formState.devolucion}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {formState.devolucion && (
                        <>
                            <FormLabel className="mt-3">Observación de Devolución</FormLabel>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="observacionDevolucion"
                                value={formState.observacionDevolucion}
                                onChange={(e) => handleInputChange(e)}
                                maxLength={100}
                                placeholder="Escriba la observación de devolución (máximo 100 caracteres)..."
                                isInvalid={errors.observacionDevolucion}
                                required
                            />
                        </>
                    )}
                </FormGroup>
            </div>

            {formState.devolucion && (
                <Button
                    variant="danger"
                    className="mt-3"
                    onClick={handleDevolver}
                >
                    Devolver
                </Button>
            )}
        </>
    );
}
