import IconTooltip from "../../shared/components/TipoSolicitud";
import { FaEye } from "react-icons/fa";




export const columnsRegistrosLider = [
    {
        key: 'idTipoSolicitud',
        label: 'Tipo estudio',
        renderComponent: (rowData: any) => <IconTooltip solicitud={rowData.solicitud} />,
    },
    {
        key: 'numeroRegistro',
        label: 'Registro',
        hasModal: true
    },
    {
        key: 'canalSolicitud',
        label: 'Canal',
    },
    {
        key: 'diasHabiles',
        label: 'Días hábiles',
    },
    {
        key: 'radicado',
        label: 'Radicado',
        hasModal: true
    },
    {
        key: 'nombrePersona',
        label: 'Nombre completo',
    },
    {
        key: 'identificacionPersona',
        label: 'NUIP',
    },
    {
        key: 'ubicacionPersona',
        label: 'Ubicación',
    },    
]


export const columnsAsignacionLider = [
    {
        key: 'idTipoSolicitud',
        label: 'Tipo estudio',
        renderComponent: (rowData: any) => <IconTooltip solicitud={rowData.solicitud} />,
    },
    {
        key: 'numeroRegistro',
        label: 'Registro',
        hasModal: true
    },
    {
        key: 'canalSolicitud',
        label: 'Canal',
    },
    {
        key: 'diasHabiles',
        label: 'Días hábiles',
    },
    {
        key: 'radicado',
        label: 'Radicado',
        hasModal: true
    },
    {
        key: 'nombrePersona',
        label: 'Nombre completo',
    },
    {
        key: 'identificacionPersona',
        label: 'NUIP',
    },
    {
        key: 'ubicacionPersona',
        label: 'Ubicación',
    },    
]