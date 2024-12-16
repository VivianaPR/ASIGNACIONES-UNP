function transformarDatos(data: any): any {
    return {
        // Población
        poblacion: data.poblacion ? data.poblacion.map((item: any) => ({
            numeroPoblacion: item.numeroPoblacion,
            poblacion: item.poblacion
        })) : [],

        // Actividad ambiental
        desarollaActividadAmbiental: data.desarollaActividadAmbiental ?? 'No registra',

        // Organización política
        organizacionPolitica: {
            perteneceOrganizacionPolitica: data.organizacionPolitica?.perteneceOrganizacionPolitica ?? 'No registra',
            tipoCargo: data.organizacionPolitica?.tipoCargo ?? 'No registra',
            cargo: data.organizacionPolitica?.cargo ?? 'No registra'
        },
    };
}


const fetchPoblacionObjetoPersona = async (registro: string | undefined) => {

    const url = process.env.REACT_APP_API_EI_ENDPOINT + 'registro/poblacion/?registro=' + registro;
    
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

export { fetchPoblacionObjetoPersona };
