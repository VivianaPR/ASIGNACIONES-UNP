import React from "react";
import { FaUser, FaAlignJustify} from "react-icons/fa6";
import { SubtituloForm } from "eco-unp/ui";
import { Form, FormGroup, FormLabel, FormSelect } from "react-bootstrap";


export function ModalRegistro(row:any){
    return (
        <>
            <SubtituloForm subtitulo={"Datos básicos"} icon={FaUser}/>
            <SubtituloForm subtitulo={"Anexos"} icon={FaAlignJustify}/>
            <FormGroup>
                <SubtituloForm subtitulo={"Observación"} icon={FaUser}/>
                <Form.Control
                as="textarea"
                rows={3}
                value={""}
                placeholder="Escribe aquí una observación sobre el caso..."
            />
            </FormGroup>
        </>
    );
}