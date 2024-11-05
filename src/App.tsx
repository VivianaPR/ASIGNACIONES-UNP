import './App.css';
import { VentanaLienzo } from 'eco-unp/ui';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BandejaCasosLider } from './pages/BandejaCasosLider';
import { BandejaCasosAnalista } from './pages/BandejaCasosAnalista';
import FormTerceros from './FormularioTerceros';
import DatosBasicos from './shared/components/DatosBasicos';

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to = "/bandeja-casos-lider"/>} />
          <Route path="/bandeja-casos-lider" element={<BandejaCasosLider />} />
          <Route path="/bandeja-casos-analista" element={<BandejaCasosAnalista />} />
          <Route path="/terceros" element={<FormTerceros />} />
          <Route path="/datos" element={<DatosBasicos />} />

        </Routes>
      </BrowserRouter>

  )
}


export default App;
