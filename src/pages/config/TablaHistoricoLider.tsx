import IconTooltip from '../../shared/components/tipoSolicitud';
import { FaEye } from "react-icons/fa";

export const columnsHistoricoLider = [
    {
        key: 'solicitud',
        label: 'Solicitud',
        renderComponent: (rowData: any) => <IconTooltip solicitud={rowData.solicitud} />,
    },
    {
        key: 'ot',
        label: 'Orden de Trabajo',
    },
    {
        key: 'registro',
        label: 'Registro',
    },
    {
        key: 'radicado',
        label: 'Radicado',
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
        key: 'celular',
        label: 'Teléfono o Celular',
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
    {
        key: 'asignaciones',
        label: 'Analista de Asignaciones',
    },
    {
        key: 'riesgo',
        label: 'Analista de Riesgo',
    },

    
]

export const dataHistoricoLider = [
    {
        solicitud: 3,
        registro: '00001',
        radicado: 'EXT 2024 000078',
        diasHabiles: '9',
        nombre: 'Lukas rendon',
        nuip: '1.021.963.741',
        celular: '350 220 4049',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
        asignaciones: 'Andres Cepeda',
        riesgo: 'Andres Manuel Lopez Obrador',
        ot: 'OTI0001'
    },
    {
        solicitud: 1,
        registro: '00001',
        radicado: 'EXT 2024 000078',
        diasHabiles: '3',
        nombre: 'Camilo Sarmiento',
        nuip: '1.021.963.741',
        celular: '350 220 4049',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
        asignaciones: 'Andres Cepeda',
        riesgo: 'Andres Manuel Lopez Obrador',
        ot: 'OTI0002'
    }, {
        solicitud: 4,
        registro: '00001',
        radicado: 'EXT 2024 000078',
        diasHabiles: '25',
        nombre: 'Lukas rendon',
        nuip: '1.021.963.741',
        celular: '350 220 4049',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
        asignaciones: 'Viviana Perez Ruiz',
        riesgo: 'Vicente Fernandez',
        ot: 'OTI0003'
    }, {
        solicitud: 2,
        registro: '00001',
        radicado: 'EXT 2024 000078',
        diasHabiles: '17',
        nombre: 'Camilo Sarmiento',
        nuip: '1.021.963.741',
        celular: '350 220 4049',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
        asignaciones: 'Viviana Perez Ruiz',
        riesgo: 'Vicente Fernandez',
        ot: 'OTI0004'
    },
    {
        solicitud: 4,
        registro: '00001',
        radicado: 'EXT 2024 000078',
        diasHabiles: '5',
        nombre: 'Lukas rendon',
        nuip: '1.021.963.741',
        celular: '350 220 4049',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
        asignaciones: 'Viviana Perez Ruiz',
        riesgo: 'Vicente Fernandez',
        ot: 'OTI0005'
    },
    {
        solicitud: 4,
        registro: '00001',
        radicado: 'EXT 2024 000078',
        diasHabiles: '3',
        nombre: 'Camilo Sarmiento',
        nuip: '1.021.963.741',
        celular: '350 220 4049',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
        asignaciones: 'Viviana Perez Ruiz',
        riesgo: 'Andres Manuel Lopez Obrador',
        ot: 'OTI0006'
    }, {
        solicitud: 3,
        registro: '00001',
        radicado: 'EXT 2024 000078',
        diasHabiles: '18',
        nombre: 'Lukas rendon',
        nuip: '1.021.963.741',
        celular: '350 220 4049',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
        asignaciones: 'Viviana Perez Ruiz',
        riesgo: 'Andres Manuel Lopez Obrador',
        ot: 'OTI0007'
    }, {
        solicitud: 2,
        registro: '00001',
        radicado: 'EXT 2024 000078',
        diasHabiles: '35',
        nombre: 'Camilo Sarmiento',
        nuip: '1.021.963.741',
        celular: '350 220 4049',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
        asignaciones: 'Andres Cepeda',
        riesgo: 'Andres Manuel Lopez Obrador',
        ot: 'OTI0008'
    },
]