import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import PaginaInicio from '../Pages/PaginaInicio';
import tema from '../Assets/Style/Temas';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import PaginaInformacionLegal from '../Pages/PaginaInformacionLegal';
import PaginaAvisoLegal from '../Pages/PaginaAvisoLegal';
import PaginaPoliticaPrivacidad from '../Pages/PaginaPoliticaPrivacidad';
import PaginaPoliticaCookies from '../Pages/PaginaPoliticaCookies';
import PaginaConsentimientoInformado from '../Pages/PaginaConsentimientoInformado';
import PaginaInformacionSanitaria from '../Pages/PaginaInformacionSanitaria';
import PaginaPerfil from '../Pages/PaginaPerfil';


export default function App() {
  return (
    <ThemeProvider theme={tema}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/crear-cuenta" element={<SignUp />} />
          <Route path="/informacion-legal" element={<PaginaInformacionLegal />} />
          <Route path="/aviso-legal" element={<PaginaAvisoLegal />} />
          <Route path="/politica-privacidad" element={<PaginaPoliticaPrivacidad />} />
          <Route path="/politica-cookies" element={<PaginaPoliticaCookies />} />
          <Route path="/consentimiento-informado" element={<PaginaConsentimientoInformado />} />
          <Route path="/informacion-sanitaria" element={<PaginaInformacionSanitaria />} />
          <Route path='/perfil' element={<PaginaPerfil />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
