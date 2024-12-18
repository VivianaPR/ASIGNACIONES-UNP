import IconTooltip from '../../shared/components/tipoSolicitud';

export const columnsRegistrosAnalista = [
    {
        key: 'solicitud',
        label: 'Solicitud',
        renderComponent: (rowData: any) => <IconTooltip solicitud={rowData} />,
    },
    {
        key: 'numeroRegistro',
        label: 'Registro',
        hasModal: true
    },
    {
        key: 'fechaSolicitudRegistro',
        label: 'F. de la solicitud',
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
        label: 'Identificación',
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