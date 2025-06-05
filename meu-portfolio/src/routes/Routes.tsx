// src/routes/Routes.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from '../pages/Portfolio'; // Verifique se o caminho está correto (ex: Portfolio.tsx)

export default function AppRoutes() {
  return (
    <BrowserRouter> {/* OK, se não estiver mais no main.tsx */}
      <Routes>
        <Route path="/" element={<Portfolio />} /> {/* Portfolio será renderizado na URL raiz '/' */}
        {/* Para uma página "não encontrada" (404), você pode adicionar: */}
        {/* <Route path="*" element={<div>Página não encontrada!</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
}