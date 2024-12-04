import './App.css';
import { VentanaLienzo } from 'eco-unp/ui';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BandejaCasosLider } from './pages/BandejaCasosLider';
import { BandejaCasosAnalista } from './pages/BandejaCasosAnalista';
import DatosBasicos from './shared/components/DatosBasicos';
import { InicioSesion, PaginaNoEncontrada, PaginaNoPermitida } from "eco-unp/ui"
import { ProtectedRoote as RutasProtegidas } from "eco-unp/utils"

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioSesion />} />

        <Route element={<RutasProtegidas />}>


        </Route>

          <Route path="*" element={<Navigate to="/bandeja-casos-lider" />} />
          <Route path="/bandeja-casos-lider" element={<BandejaCasosLider />} />
          <Route path="/bandeja-casos-analista" element={<BandejaCasosAnalista />} />

          <Route path="/datos" element={<DatosBasicos />} />
          
        <Route path="/sistema/pagina-no-permitida" element={<PaginaNoPermitida />} />
        <Route path="*" element={<PaginaNoEncontrada />} />

      </Routes>
    </BrowserRouter>

  )
}


export default App;
