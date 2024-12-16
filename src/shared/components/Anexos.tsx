import React, { useState } from "react";
import { SubtituloForm } from "eco-unp/Ui";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { FaFile, FaFileImage, FaFileWord } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";

interface Anexo {
  nombre_archivo: string;
  tipo: string;
  id: string;
}

const anexos: Anexo[] = [
  {
    nombre_archivo: "Documento1.pdf",
    tipo: "pdf",
    id: "f78a1671-f8bb-4cdf-b2a6-fbadf7a7e13c",
  },
  {
    nombre_archivo: "Imagen1.jpg",
    tipo: "jpg",
    id: "f78a1671-f8bb-4cdf-b2a6-fbadf7a7e13c",
  },
  {
    nombre_archivo: "Informe1.docx",
    tipo: "docx",
    id: "f78a1671-f8bb-4cdf-b2a6-fbadf7a7e13c",
  },
  {
    nombre_archivo: "Notas1.txt",
    tipo: "text",
    id: "f78a1671-f8bb-4cdf-b2a6-fbadf7a7e13c",
  }
];

// Función para obtener el icono en función del tipo de archivo
const getIconByType = (tipo: string) => {
  switch (tipo) {
    case "pdf":
      return <BsFillFileEarmarkPdfFill />;
    case "jpg":
      return <FaFileImage />;
    case "docx":
      return <FaFileWord />;
    default:
      return <FaFile />;
  }
};
const AnexosSolicitante: React.FC<any> = ({row}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  return (
    <>
      <SubtituloForm subtitulo={"Anexos"} icon={GrAttachment} />

      <div className="modal_proccess_container">
       
        <div className="files_container" >
          {anexos.map((anexo, index) => (
            <div
              key={index}
              className="anexo_item"
              
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="file_icon_container">
                {getIconByType(anexo.tipo)}
              </div>
              <span>{anexo.nombre_archivo}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnexosSolicitante;
