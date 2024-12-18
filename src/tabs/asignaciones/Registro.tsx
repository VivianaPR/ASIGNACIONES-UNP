import React from "react";
import { BootstrapTable } from "eco-unp/Tables";
import { columnsRegistrosLider } from "../../pages/config/TablaRegistrosLider";
import { ModalRegistroLider } from "../../modals/ModalRegistroLider";
import { ModalAsignacionARiesgo } from "../../modals/ModalAsignacionARiesgo";

interface Registro {
    tipoRuta: string;
    idCanalSolicitud: number;
    canalSolicitud: string;
    idTipoSolicitud: number;
    tipoSolicitud: string;
    estadoRegistro: number;
    numeroRegistro: number;
    diasHabiles: number;
    fechaSolicitud: string;
    fechaIngreso: string;
}

interface NombrePersona {
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
}

interface IdentificacionPersona {
    tipoDocumento: string;
    numeroDocumento: string;
    fechaExpedicion: string;
}

interface UbicacionPersona {
    departamento: string;
    municipio: string;
    zona: string;
    direccion: string;
}

interface ApiResponse {
    registro: Registro;
    radicado: string;
    nombrePersona: NombrePersona;
    edadPersona: number;
    generoPersona: string;
    identificacionPersona: IdentificacionPersona;
    ubicacionPersona: UbicacionPersona;
    cantidadSituacion: number;
    cantidadMedio: number;
}

interface Solicitud {
    solicitud: number;
    canalSolicitud: string;
    estadoRegistro: number;
    numeroRegistro: number;
    registroCompleto: Registro;
    radicado: string;
    diasHabiles: number;
    nombrePersona: string;
    identificacionPersona: string;
    identificacionPersonaCompleto: IdentificacionPersona;
    ubicacionPersona: string;
    ubicacionPersonaCompleto: UbicacionPersona;
    complementarios: string;
}

// 
const transformarDatos = (data: ApiResponse): Solicitud => {
    return {
        solicitud: data.registro.idTipoSolicitud,
        canalSolicitud: data.registro.canalSolicitud,
        estadoRegistro: data.registro.estadoRegistro,
        numeroRegistro: data.registro.numeroRegistro,
        registroCompleto: data.registro,
        radicado: data.radicado,
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
        identificacionPersonaCompleto: data.identificacionPersona,
        ubicacionPersona: data.ubicacionPersona ? data.ubicacionPersona.departamento + ', ' + data.ubicacionPersona.municipio : '',
        ubicacionPersonaCompleto: data.ubicacionPersona,
        complementarios: data.generoPersona,
    };
};

export const RegistroAsignacion: React.FC = () => {

    const [dataRegistro, setDataRegistro] = React.useState<Solicitud[]>([]);
    const [dataAsignacion, setDataAsignacion] = React.useState<Solicitud[]>([]);
    const [update, setUpdate] = React.useState(false);
    const url = 'http://127.0.0.1:8000/registro/liderasignacion/'

    const renderModalContent = (row: Record<string, any>, column: any) => {
        switch (column.key) {
            case "numeroRegistro":
                return (<ModalRegistroLider row={row} update={setUpdate} />);
            case "registro_tablaAsignacionARiesgo":
                return (<ModalAsignacionARiesgo update={undefined} />);
            default:
                return <p>No hay información adicional disponible.</p>;
        }
    };

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                const filteredDataRegistro = result
                    .map((item: ApiResponse) => transformarDatos(item))
                    .filter((item: Solicitud) => item.estadoRegistro === 11);
                // const filteredDataAsignacion = result
                //     .map((item: ApiResponse) => transformarDatos(item))
                //     .filter((item: Solicitud) => item.estadoRegistro === 19);
                setDataRegistro(filteredDataRegistro);
                // setDataAsignacion(filteredDataAsignacion);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        setUpdate(false);
        console.log('se actualiza')

        const intervalTime = 5000; // 1 minuto en ms

        const interval = setInterval(async () => {
            await fetchData();
            setUpdate(false);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [url, update]);

    return (
        <BootstrapTable
            columns={columnsRegistrosLider}
            data={dataRegistro}
            renderModalContent={renderModalContent}
            totalDias={30} subtitle={"Subdirección de Evaluación de Riesgo"} items={"CTAR"}
        />
    );
};