import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import PaginaInicio from '../Pages/PaginaInicio';
import theme from '../Assets/Theme';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
