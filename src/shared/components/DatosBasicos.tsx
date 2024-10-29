import React from "react";
import { SubtituloForm } from "eco-unp/ui";
import {FaAlignJustify} from "react-icons/fa6"

const DatosSolicitante: React.FC = () =>{
    return (
        <>
         <SubtituloForm subtitulo={"Anexos"} icon={FaAlignJustify}/>
        <p>Datos básicos</p>

        </>
    )

}

export default DatosSolicitante