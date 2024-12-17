const idUsuario = '28d73cb5-3b48-4e23-bb93-f301fc2d3aa2';

function transformarDatos(data: any): any {
    return {
        solicitud: data.registro.idTipoSolicitud,
        idUsuario: data.registro.usuario,
        numeroRegistro: data.registro.numeroRegistro,
        fechaSolicitudRegistro: data.registro.fechaSolicitud,
        fechaRecepcionRegistro: data.registro.fechaIngreso ? data.registro.fechaIngreso.split(' ')[0] : 'No registra',
        radicadoRegistro: data.radicado,
        diasHabiles: data.registro.diasHabiles,
        nombrePersona: (data.nombrePersona ?
            data.nombrePersona.primerNombre +
            (data.nombrePersona.segundoNombre ? ' ' + data.nombrePersona.segundoNombre : '') +
            ' ' + data.nombrePersona.primerApellido +
            (data.nombrePersona.segundoApellido ? ' ' + data.nombrePersona.segundoApellido : '')
            : ''),
        identificacionPersona: (data.identificacionPersona ?
            (data.identificacionPersona.tipoDocumento === 'Cédula de ciudadanía' ?
                'C.C.' : data.identificacionPersona.tipoDocumento === 'Tarjeta de identidad' ?
                    'T.I.' : data.identificacionPersona.tipoDocumento === 'Pasaporte' ?
                        'P.P.' : 'C.E.') + ' ' + data.identificacionPersona.numeroDocumento
            : ''),
        generoPersona: data.generoPersona,
        departamentoUbicacion: data.ubicacionPersona?.departamento ?? 'No registrado',
        municipioUbicacion: data.ubicacionPersona?.municipio ?? 'No registrado',
    };
}

async function fetchBandejaAnalistaAsignaciones() {
    const url = process.env.REACT_APP_API_EI_ENDPOINT + 'registro/analistaasignacion/?format=json&usuario=' + idUsuario;
    try {

        const response = await fetch(url);
        const result = await response.json();

        if (result.en_gestion && result.por_gestionar) {
            const enGestion = result.en_gestion.map((item: any) => transformarDatos(item));
            const porGestionar = result.por_gestionar.map((item: any) => transformarDatos(item));
            return { enGestion, porGestionar };
        } else {
            console.error('Error: La respuesta de la API no tiene la estructura esperada:', result);
            return { enGestion: [], porGestionar: [] };
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return { enGestion: [], porGestionar: [] };
    }
}

async function fetchBandejaLiderAsignaciones() {
    const url = process.env.REACT_APP_API_EI_ENDPOINT + 'registro/liderasignacion/?format=json';
    try {
        const response = await fetch(url);
        const result = await response.json();
        
        if (!result.results || !Array.isArray(result.results)) {
            throw new Error('El resultado no contiene una propiedad "results" que sea un array');
        }

        const filteredData = result.results.map((item: any) => transformarDatos(item));
        return filteredData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export { fetchBandejaAnalistaAsignaciones, fetchBandejaLiderAsignaciones };