import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import PaginaInicio from '../Pages/PaginaInicio';
import tema from '../Assets/Temas';


export default function App() {
  return (
    <ThemeProvider theme={tema}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
