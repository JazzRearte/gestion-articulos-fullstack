import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout.jsx';
import { Acerca } from './pages/Acerca.jsx';
import { ArticuloDetalle } from './pages/ArticuloDetalle.jsx';
import { ArticuloFormPage } from './pages/ArticuloFormPage.jsx';
import { ArticulosPage } from './pages/ArticulosPage.jsx';
import { Home } from './pages/Home.jsx';
import './styles.css';

export default function App() {
  const [totalArticulos, setTotalArticulos] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout totalArticulos={totalArticulos} />}>
          <Route index element={<Home totalArticulos={totalArticulos} />} />

          <Route
            path="articulos"
            element={<ArticulosPage onTotalChange={setTotalArticulos} />}
          />

          <Route
            path="articulos/nuevo"
            element={<ArticuloFormPage onTotalChange={setTotalArticulos} />}
          />

          <Route
            path="articulos/:id"
            element={<ArticuloDetalle />}
          />

          <Route
            path="articulos/:id/editar"
            element={<ArticuloFormPage onTotalChange={setTotalArticulos} />}
          />

          <Route path="acerca" element={<Acerca />} />
          <Route path="inicio" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
