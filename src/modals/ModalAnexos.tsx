
import React from 'react';
import { FaFilePdf, FaFileImage, FaFileWord, FaFileDownload, FaEye } from 'react-icons/fa';

interface Attachment {
    name: string;
    type: string;
    size: string;
    date: string;
    url: string;
}

interface AttachmentsViewerProps {
    attachments: Attachment[];
}

const AttachmentsViewer: React.FC<AttachmentsViewerProps> = ({ attachments }) => {
    // Función para obtener el icono según el tipo de archivo
    const getFileIcon = (type: string) => {
        switch(type) {
            case 'pdf': return <FaFilePdf className="icon pdf" />;
            case 'image': return <FaFileImage className="icon image" />;
            case 'doc': return <FaFileWord className="icon doc" />;
            default: return <FaFilePdf className="icon default" />;
        }
    };

    return (
        <div className="attachments-viewer">
            <h3>Archivos Adjuntos</h3>
            <ul>
                {attachments.map((file, index) => (
                    <li key={index} className="attachment-item">
                        {getFileIcon(file.type)}
                        <div className="attachment-info">
                            <span className="file-name">{file.name}</span>
                            <span className="file-size">{file.size}</span>
                            <span className="upload-date">{file.date}</span>
                        </div>
                        <div className="attachment-actions">
                            <a href={file.url} target="_blank" rel="noopener noreferrer" className="view-btn">
                                <FaEye /> Ver
                            </a>
                            <a href={file.url} download className="download-btn">
                                <FaFileDownload /> Descargar
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AttachmentsViewer;