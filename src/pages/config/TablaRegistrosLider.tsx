import IconTooltip from "../../shared/components/tipoSolicitud";
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

export const dataRegistrosLider = [
    {
        solicitud: 3,
        registro_tablaRegistrosLider: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '9',
        nombre: 'Lukas rendon',
        nuip: '1.021.963.741',
        celular: '350 220 4049',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
    },
    {
        solicitud: 1,
        registro_tablaRegistrosLider: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '3',
        nombre: 'Camilo Sarmiento',
        nuip: '1.021.963.741',
        celular: '350 220 4049',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
    }, {
        solicitud: 4,
        registro_tablaRegistrosLider: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '25',
        nombre: 'Lukas rendon',
        nuip: '1.021.963.741',
        celular: '350 220 4049',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
    }, {
        solicitud: 2,
        registro_tablaRegistrosLider: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '17',
        nombre: 'Camilo Sarmiento',
        nuip: '1.021.963.741',
        celular: '350 220 4049',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
    },
    {
        solicitud: 4,
        registro_tablaRegistrosLider: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '5',
        nombre: 'Lukas rendon',
        nuip: '1.021.963.741',
        celular: '350 220 4049',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
    },
    {
        solicitud: 5,
        registro_tablaRegistrosLider: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '3',
        nombre: 'Camilo Sarmiento',
        nuip: '1.021.963.741',
        celular: '350 220 4049',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
    }, {
        solicitud: 3,
        registro_tablaRegistrosLider: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '18',
        nombre: 'Lukas rendon',
        nuip: '1.021.963.741',
        celular: '350 220 4049',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
    }, {
        solicitud: 2,
        registro_tablaRegistrosLider: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '35',
        nombre: 'Camilo Sarmiento',
        nuip: '1.021.963.741',
        celular: '350 220 4049',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
    },
]