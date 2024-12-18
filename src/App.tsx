import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BandejaCasosLider } from './pages/BandejaCasosLider';
import { BandejaCasosAnalista } from './pages/BandejaCasosAnalista';
import WebSocketComponent from './WebSocketComponent';

function App() {
  return (

    <BrowserRouter>
      <Routes>
          <Route path="/ser/asg/bandeja-lider" element={<BandejaCasosLider />} />
          <Route path="/ser/asg/bandeja-analista" element={<BandejaCasosAnalista />} />
      </Routes>
      <div style={{display:'none'}}>
        <WebSocketComponent />
      </div>
    </BrowserRouter>

  )
}


export default App;
