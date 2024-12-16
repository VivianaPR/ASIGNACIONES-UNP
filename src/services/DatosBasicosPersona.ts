function transformarDatos(data: any): any {
    return {
        // Nombre completo de la persona
        nombrePersona: (data.nombrePersona ?
            data.nombrePersona.primerNombre +
            (data.nombrePersona.segundoNombre ? ' ' + data.nombrePersona.segundoNombre : '') +
            ' ' + data.nombrePersona.primerApellido +
            (data.nombrePersona.segundoApellido ? ' ' + data.nombrePersona.segundoApellido : '')
            : ''),

        // Número único de identificación personal (NUIP)
        tipoIdentificacion: data.identificacionPersona?.tipoDocumento ?? 'No registra',
        numeroIdentificacion: data.identificacionPersona?.numeroDocumento ?? 'No registra',
        fechaExpedicion: data.identificacionPersona?.fechaExpedicion ?? 'No registra',

        // Género
        generoPersona: data?.generoPersona ?? 'No registra',
        
        // Datos de nacimiento


        // Datos de ubicación
        departamentoUbicacion: data.ubicacionPersona?.departamento ?? 'No registrado',
        municipioUbicacion: data.ubicacionPersona?.municipio ?? 'No registrado',
        zonaUbicacion: data.ubicacionPersona?.zona ?? 'No registra',
        direccionUbicacion: data.ubicacionPersona?.direccion ?? 'No registra'
    };
}

const fetchDatosBasicosPersona = async (registro: string | undefined) => {

    const url = process.env.REACT_APP_API_EI_ENDPOINT + 'registro/persona/?registro=' + registro;
    
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

export { fetchDatosBasicosPersona };