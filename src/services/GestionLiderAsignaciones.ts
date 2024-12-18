async function fetchListadoAnalistas() {
    const url = process.env.REACT_APP_API_EI_ENDPOINT + 'registro/listaanalistariesgo/';
    try {

        const response = await fetch(url);
        const result = await response.json();

        return result.results;

    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export { fetchListadoAnalistas };