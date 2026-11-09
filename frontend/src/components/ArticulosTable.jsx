
import React from 'react';
import { Link } from 'react-router-dom';

export function ArticulosTable({ articulos, onEliminar }) {
  return (
    <section className="card table-card">
      <div className="section-heading">
        <div>
          <p className="eyebrow">GET /api/articulos</p>
          <h2>Listado de artículos</h2>
        </div>

        <Link className="link-button" to="/articulos/nuevo">
          + Nuevo artículo
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Número de categoría</th>
            <th>Descripción de categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {articulos.map((articulo) => (
            <tr key={articulo.id}>
              <td>{articulo.id}</td>
              <td>{articulo.nombre}</td>
              <td>
                ${Number(articulo.precio).toLocaleString('es-AR')}
              </td>
              <td>{articulo.stock}</td>
              <td>{articulo.numeroCategoria}</td>
              <td>{articulo.descripcionCategoria}</td>

              <td className="row-actions">
                <Link
                  className="table-link"
                  to={`/articulos/${articulo.id}`}
                >
                  Ver
                </Link>

                <Link
                  className="table-link edit"
                  to={`/articulos/${articulo.id}/editar`}
                >
                  Editar
                </Link>

                <button
                  className="danger"
                  onClick={() => onEliminar(articulo.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

          {articulos.length === 0 && (
            <tr>
              <td colSpan={7} className="empty">
                No hay artículos que coincidan con la búsqueda.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

