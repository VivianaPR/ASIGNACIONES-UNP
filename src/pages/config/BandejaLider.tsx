import IconTooltip from '../../shared/components/tipoSolicitud';
import { FaEye } from "react-icons/fa";

export const columnsLeader = [
    {
        key: 'solicitud',
        label: 'Solicitud',
        renderComponent: (rowData: any) => <IconTooltip solicitud={rowData.solicitud} />,
    },
    {
        key: 'registro',
        label: 'Registro',
        hasModal: true
    },
    {
        key: 'radicado',
        label: 'Radicado',
    },
    {
        key: 'dias_habiles',
        label: 'Días hábiles',
    },
    {
        key: 'nombre',
        label: 'Nombre completo',
    },
    {
        key: 'nuip',
        label: 'Nuip',
    },
    {
        key: 'genero',
        label: 'Celular o teléfono',
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
        key: 'zona',
        label: 'Zona',
    },
    {
        key: 'anexos',
        label: 'Anexos',
        renderComponent: (row: any) =>
            <button className="btn custom-button" onClick={() => alert(`Documentacion anexa de ${row.nombre}`)}>
                <FaEye />
            </button>
    },
]

export const dataLeader = [
    {
        solicitud: 3,
        registro: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '9',
        nombre: 'Lukas rendon',
        nuip: '1.021.963.741',
        genero: 'Masculino',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
        zona: 'Urbana',
    },
    {
        solicitud: 1,
        registro: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '3',
        nombre: 'Camilo Sarmiento',
        nuip: '1.021.963.741',
        genero: 'Masculino',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
        zona: 'Urbana',
    }, {
        solicitud: 4,
        registro: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '25',
        nombre: 'Lukas rendon',
        nuip: '1.021.963.741',
        genero: 'Masculino',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
        zona: 'Urbana',
    }, {
        solicitud: 2,
        registro: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '17',
        nombre: 'Camilo Sarmiento',
        nuip: '1.021.963.741',
        genero: 'Masculino',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
        zona: 'Urbana',
    },
    {
        solicitud: 4,
        registro: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '5',
        nombre: 'Lukas rendon',
        nuip: '1.021.963.741',
        genero: 'Masculino',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
        zona: 'Urbana',
    },
    {
        solicitud: 1,
        registro: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '3',
        nombre: 'Camilo Sarmiento',
        nuip: '1.021.963.741',
        genero: 'Masculino',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
        zona: 'Urbana',
    }, {
        solicitud: 3,
        registro: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '18',
        nombre: 'Lukas rendon',
        nuip: '1.021.963.741',
        genero: 'Masculino',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
        zona: 'Urbana',
    }, {
        solicitud: 2,
        registro: '00001',
        radicado: 'EXT 2024 000078',
        dias_habiles: '35',
        nombre: 'Camilo Sarmiento',
        nuip: '1.021.963.741',
        genero: 'Masculino',
        correo: 'lucas.rendon@unp.gov.co',
        departamento: 'Bogotá D.C.',
        municipio: 'Bogotá D.C.',
        zona: 'Urbana',
    },
]