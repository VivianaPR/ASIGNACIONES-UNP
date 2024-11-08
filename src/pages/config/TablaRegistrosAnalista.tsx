import IconTooltip from '../../shared/components/TipoSolicitud';
import { FaEye } from "react-icons/fa";

export const columnsRegistrosAnalista = [
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

export const dataRegistrosAnalista = [
    {
        solicitud: 3,
        registro: '00001',
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
        registro: '00001',
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
        registro: '00001',
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
        registro: '00001',
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
        registro: '00001',
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
        registro: '00001',
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
        registro: '00001',
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
        registro: '00001',
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