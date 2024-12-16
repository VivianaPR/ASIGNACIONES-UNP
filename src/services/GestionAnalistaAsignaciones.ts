const fetchGestionTipoEstudio = async () => {
    
    const url = process.env.REACT_APP_API_EI_ENDPOINT + 'registro/tipoestudio/';

    try {
        const response = await fetch(url);
        const result = await response.json();

        if (!result.results || !Array.isArray(result.results)) {
            throw new Error('El resultado no contiene una propiedad "results" que sea un array');
        }

        const filteredData = result.results.map((item: any) => item);
        return filteredData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

const fetchGestionSolicitud = async () => {

    const url = process.env.REACT_APP_API_EI_ENDPOINT + 'registro/gestionAsignacion/';

    try {
        const response = await fetch(url);
        const result = await response.json();

        if (typeof result !== 'object' || result === null) {
            throw new Error('El resultado no es un objeto válido');
        }

        const filteredData = Object.entries(result).map(([key, value]) => ({
            id: Number(key),
            nombre: value as string,
        }));

        return filteredData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};


export { fetchGestionTipoEstudio, fetchGestionSolicitud };