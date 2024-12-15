import IconTooltip from '../../shared/components/tipoSolicitud';

export const columnsRegistrosAnalista = [
    {
        key: 'solicitud',
        label: 'Solicitud',
        renderComponent: (rowData: any) => <IconTooltip solicitud={rowData.solicitud} />,
    },
    {
        key: 'numeroRegistro',
        label: 'Registro',
        hasModal: true
    },
    {
        key: 'radicadoRegistro',
        label: 'Radicado',
    },
    {
        key: 'diasHabiles',
        label: 'Días hábiles',
    },
    {
        key: 'nombrePersona',
        label: 'Nombre completo',
    },
    {
        key: 'identificacionPersona',
        label: 'Número de Identificación',
    },
    {
        key: 'generoPersona',
        label: 'Género',
    },
    {
        key: 'departamentoUbicacion',
        label: 'Departamento',
    },
    {
        key: 'municipioUbicacion',
        label: 'Municipio',
    },
    
]

export const dataRegistrosAnalista = [
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
        
    },
]