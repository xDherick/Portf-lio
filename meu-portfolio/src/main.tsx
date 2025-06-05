// src/main.tsx - Exemplo SE o BrowserRouter foi movido para AppRoutes.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // App agora renderiza AppRoutes, que tem o BrowserRouter
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App /> {/* Sem BrowserRouter aqui */}
  </React.StrictMode>
);