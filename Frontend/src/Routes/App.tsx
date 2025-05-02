import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicio from '../Pages/PaginaInicio';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
      </Routes>
    </BrowserRouter>
  );
}
