import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export function Layout({ totalArticulos }) {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">React Router + Props + API REST</p>
        <h1>CRUD de artículos</h1>
        <p>
          Este proyecto combina rutas del lado cliente, navegación con <code>NavLink</code>,
          rutas dinámicas con <code>useParams</code> y pasaje de propiedades entre componentes.
        </p>
      </header>

      <nav className="top-nav" aria-label="Navegación principal">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/articulos">Artículos</NavLink>
        <NavLink to="/acerca">Acerca</NavLink>
        <span className="counter">{totalArticulos} artículos</span>
      </nav>

      <Outlet />
    </main>
  );
}
