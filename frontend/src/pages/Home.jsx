import React from 'react';
import { Link } from 'react-router-dom';

export function Home({ totalArticulos }) {
  return (
    <section className="card intro-card">
      <h2>Inicio</h2>

      <p>
        La URL también forma parte del estado de una SPA.
        React Router decide qué componente mostrar para cada ruta
        sin recargar todo el documento HTML.
      </p>

      <div className="route-grid route-grid-four">
        <div>
          <strong>/articulos</strong>
          <span>Listado de artículos</span>
        </div>
        <div>
          <strong>/articulos/nuevo</strong>
          <span>Alta</span>
        </div>
        <div>
          <strong>/articulos/:id</strong>
          <span>Detalle dinámico</span>
        </div>
        <div>
          <strong>/articulos/:id/editar</strong>
          <span>Edición en ruta separada</span>
        </div>
      </div>

      <p className="small">
        Actualmente hay {totalArticulos} artículos cargados en memoria.
      </p>

      <div className="actions">
        <Link className="link-button" to="/articulos">
          Ver artículos
        </Link>
        <Link className="link-button edit" to="/articulos/nuevo">
          Crear artículo
        </Link>
      </div>
    </section>
  );
}
