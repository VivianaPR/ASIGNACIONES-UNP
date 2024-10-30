import IconTooltip from '../../shared/components/tipoSolicitud';
import { FaEye } from "react-icons/fa";

export const columnsAsignacionesLider = [
    {
        key: 'solicitud',
        label: 'Solicitud',
        renderComponent: (rowData: any) => <IconTooltip solicitud={rowData.solicitud} />,
    },
    {
        key: 'registro_tablaAsignacionARiesgo',
        label: 'Registro',
        hasModal: true
    },
    {
        key: 'radicado',
        label: 'Radicado',
    },
    {
        key: 'dias_habiles',
        label: 'Días hábiles',
    },
    {
        key: 'nombre',
        label: 'Nombre completo',
    },
    {
        key: 'nuip',
        label: 'Numero de Identificación',
    },
    {
        key: 'genero',
        label: 'Celular o teléfono',
    },
    {
        key: 'correo',
        label: 'Correo electrónico',
    },
    {
        key: 'departamento',
        label: 'Departamento',
    },
    {
        key: 'municipio',
        label: 'Municipio',
    },
    
]

export const dataAsignacionesLider = [
    {
        solicitud: 3,
        registro_tablaAsignacionARiesgo: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '9',
        nombre: 'Lukas rendon',
        nuip: '1.021.963.741',
        genero: 'Masculino',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
    },
    {
        solicitud: 1,
        registro_tablaAsignacionARiesgo: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '3',
        nombre: 'Camilo Sarmiento',
        nuip: '1.021.963.741',
        genero: 'Masculino',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
    }, {
        solicitud: 4,
        registro_tablaAsignacionARiesgo: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '25',
        nombre: 'Lukas rendon',
        nuip: '1.021.963.741',
        genero: 'Masculino',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
    }, {
        solicitud: 2,
        registro_tablaAsignacionARiesgo: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '17',
        nombre: 'Camilo Sarmiento',
        nuip: '1.021.963.741',
        genero: 'Masculino',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
    },
    {
        solicitud: 4,
        registro_tablaAsignacionARiesgo: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '5',
        nombre: 'Lukas rendon',
        nuip: '1.021.963.741',
        genero: 'Masculino',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
    },
    {
        solicitud: 1,
        registro_tablaAsignacionARiesgo: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '3',
        nombre: 'Camilo Sarmiento',
        nuip: '1.021.963.741',
        genero: 'Masculino',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
    }, {
        solicitud: 3,
        registro_tablaAsignacionARiesgo: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '18',
        nombre: 'Lukas rendon',
        nuip: '1.021.963.741',
        genero: 'Masculino',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
    }, {
        solicitud: 2,
        registro_tablaAsignacionARiesgo: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '35',
        nombre: 'Camilo Sarmiento',
        nuip: '1.021.963.741',
        genero: 'Masculino',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
    },
]