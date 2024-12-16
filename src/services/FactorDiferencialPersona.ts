function transformarDatos(data: any): any {
    const replaceNA = (value: any) => (value === "N/A" || value === "No aplica") ? 'No registra' : value;
    const etnico = typeof data.etnico === 'object' && data.etnico !== null ? data.etnico : null;

    return {
        sexo: replaceNA(data.sexo),
        orientacionSexual: replaceNA(data.orientacionSexual),
        rangoEtario: replaceNA(data.rangoEtario),
        factorDiferencial: replaceNA(data.FactorDiferencial),
        discapacidad: typeof data.discapacidad === 'object' && data.discapacidad !== null
            ? replaceNA(data.discapacidad.discapacidad)
            : (data.discapacidad === "N/A" || data.discapacidad === "" ? 'No' : replaceNA(data.discapacidad)),
        etnico: etnico,
        autorreconocidoEtnico: etnico ? "Sí" : "No",
        grupoEtnico: etnico ? replaceNA(etnico.grupoEtnico) : 'No registra',
        etniaIndigena: etnico && etnico.etnicoIndigena ? replaceNA(etnico.etnicoIndigena.etnia) : 'No registra',
        resguardo: etnico && etnico.etnicoIndigena ? replaceNA(etnico.etnicoIndigena.resguardo) : 'No registra',
        comunidadResguardo: etnico && etnico.etnicoIndigena ? replaceNA(etnico.etnicoIndigena.comunidad) : 'No registra',
        parcialidad: etnico && etnico.etnicoIndigena ? replaceNA(etnico.etnicoIndigena.parcialidad) : 'No registra',
        comunidadSinRegistro: etnico && etnico.etnicoIndigena ? replaceNA(etnico.etnicoIndigena.comunidad_sregistro) : 'No registra',
        nombreConsejoComunitario: etnico ? replaceNA(etnico.etnicoConsejo) : 'No registra',
        personasCargo: replaceNA(data.personasCargo),
        organizacion: typeof data.organizacion === 'object' && data.organizacion !== null
            ? {
                NombreOrganizacion: replaceNA(data.organizacion.NombreOrganizacion),
                tipoOrganizacion: replaceNA(data.organizacion.tipoOrganizacion),
                numeroPjuridica: replaceNA(data.organizacion.numeroPjuridica),
                otraOrganizacion: replaceNA(data.organizacion.otraOrganizacion)
            }
            : replaceNA(data.organizacion),
        medidaCautelar: replaceNA(data.medidaCautelar)
    };
}

const fetchFactorDiferencialPersona = async (registro: string | undefined) => {

    const url = process.env.REACT_APP_API_EI_ENDPOINT + 'registro/complementarios/?registro=' + registro;
    
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

export { fetchFactorDiferencialPersona };