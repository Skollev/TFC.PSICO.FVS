import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import PaginaInicio from '../Pages/PaginaInicio';
import tema from '../Assets/Temas';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import PaginaInformacionLegal from '../Pages/PaginaInformacionLegal';


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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
