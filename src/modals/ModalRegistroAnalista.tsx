import React from 'react';
import { FaUser, FaFolderClosed, FaFileCircleQuestion, FaListUl } from 'react-icons/fa6';
import { SubtituloForm } from 'eco-unp/Ui';
import { Form, FormGroup, FormSelect } from 'react-bootstrap';
import AnexosSolicitante from '../shared/components/Anexos';
import DatosBasicos from '../shared/components/DatosBasicos';
import { fetchGestionSolicitud, fetchGestionTipoEstudio } from '../services/GestionAnalistaAsignaciones';

interface Props {
  row?: any;
  update: any;
}

interface TipoEstudio {
  id_tsolicitud: number;
  nombre_tsolicitud: string;
}

interface GestionSolicitud {
  id: number;
  nombre: string;
}

export const ModalRegistroAnalista: React.FC<Props> = ({ row, update }) => {

  const [tiposEstudio, setTiposEstudio] = React.useState<TipoEstudio[]>([]);
  const [gestionSolicitud, setGestionSolicitud] = React.useState<GestionSolicitud[]>([]);
  const [selectedTipoEstudio, setSelectedTipoEstudio] = React.useState('');
  const [selectedGestion, setSelectedGestion] = React.useState('');
  const [text, setText] = React.useState('');
  const numeroRegistro = row.numeroRegistro;
  const fechaRegistro = row.fechaSolicitudRegistro;
  const fechaRecepcion = row.fechaRecepcionRegistro;

  React.useEffect(() => {

    const fetchData = async () => {
      try {
        const fetchedGestionSolicitud = await fetchGestionSolicitud();
        const fetchedTipoEstudio = await fetchGestionTipoEstudio();

        setTiposEstudio(fetchedTipoEstudio);
        setGestionSolicitud(fetchedGestionSolicitud);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  const send = async () => {

    const urlTrazabilidad = process.env.REACT_APP_API_EI_ENDPOINT + 'sistema/trazabilidad/registro';
    const urlTipoEstudio = process.env.REACT_APP_API_EI_ENDPOINT + 'registro/actualizartipoestudio/';

    try {

      const response = await fetch(urlTrazabilidad, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          registro: row.numeroRegistro,
          estado: selectedGestion,
          obs: text
        }),
      });

      const result = await response.json();

      if (result.status === 'success') {

        try {

          const response = await fetch(urlTipoEstudio, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              registro: row.numeroRegistro,
              tipoEstudio: selectedTipoEstudio
            }),
          });

          const result = await response.json();

          if (result.status === 'success') {
            update(true);
          } else {
            console.error('Failed to update registro state.');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }

        update(true);
      } else {
        console.error('Failed to update registro state.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  };

  return (
    <>
      <DatosBasicos registro={numeroRegistro} fechaRegistro={fechaRegistro} fechaRecepcion={fechaRecepcion} />
      <AnexosSolicitante />

      <SubtituloForm subtitulo={'Tipo de estudio'} icon={FaFileCircleQuestion} />
      <FormGroup className="mt-2 text-start">
        <FormSelect value={selectedTipoEstudio} onChange={(e) => setSelectedTipoEstudio(e.target.value)}>
          <option value="">Seleccione...</option>
          {tiposEstudio.map((tipo) => (
            <option key={tipo.id_tsolicitud} value={tipo.id_tsolicitud}>
              {tipo.nombre_tsolicitud}
            </option>
          ))}
        </FormSelect>
      </FormGroup>

      <FormGroup>
        <SubtituloForm subtitulo={'Gestión'} icon={FaFolderClosed} />
        <FormSelect value={selectedGestion} onChange={(e) => setSelectedGestion(e.target.value)}>
          <option value="">Seleccione...</option>
          {gestionSolicitud.map((gestion) => (
            <option key={gestion.id} value={gestion.id}>
              {gestion.nombre}
            </option>
          ))}
        </FormSelect>
      </FormGroup>

      <FormGroup>
        <SubtituloForm subtitulo={'Observación'} icon={FaListUl} />
        <Form.Control
          as="textarea"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe aquí una observación sobre el caso..."
        />
      </FormGroup>

      <div style={{ display: 'flex', justifyContent: 'right', marginTop: '1rem' }}>
        <button className="btn btn-primary" onClick={send} disabled={!selectedTipoEstudio || !selectedGestion}>
          Enviar
        </button>
      </div>
    </>
  );
};