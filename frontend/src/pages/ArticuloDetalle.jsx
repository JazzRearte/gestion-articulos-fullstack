
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { obtenerArticulo } from '../services/articulosApi.js';

export function ArticuloDetalle() {
  const { id } = useParams();
  const location = useLocation();

  const [articulo, setArticulo] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function cargarDetalle() {
      setCargando(true);
      setError('');

      try {
        const data = await obtenerArticulo(id);
        setArticulo(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }

    cargarDetalle();
  }, [id]);

  if (cargando) {
    return <div className="alert loading">Cargando artículo #{id}...</div>;
  }

  if (error) {
    return (
      <section className="card intro-card">
        <h2>No se encontró el artículo</h2>
        <p className="alert error">{error}</p>
        <Link className="link-button" to="/articulos">
          Volver al listado
        </Link>
      </section>
    );
  }

  return (
    <section className="card intro-card">
      <p className="eyebrow">Ruta dinámica /articulos/:id</p>
      <h2>{articulo.nombre}</h2>

      {location.state?.mensaje && (
        <div className="alert ok">{location.state.mensaje}</div>
      )}

      <p>
        El parámetro de la URL es <code>{id}</code> y fue leído con
        <code> useParams()</code>.
      </p>

      <div className="detail-grid">
        <div>
          <span>ID</span>
          <strong>{articulo.id}</strong>
        </div>

        <div>
          <span>Precio</span>
          <strong>
            ${Number(articulo.precio).toLocaleString('es-AR')}
          </strong>
        </div>

        <div>
          <span>Stock</span>
          <strong>{articulo.stock}</strong>
        </div>

        <div>
          <span>Número de categoría</span>
          <strong>{articulo.numeroCategoria}</strong>
        </div>

        <div>
          <span>Descripción de categoría</span>
          <strong>{articulo.descripcionCategoria}</strong>
        </div>
      </div>

      <div className="actions">
        <Link className="link-button" to="/articulos">
          Volver al listado
        </Link>

        <Link
          className="link-button edit"
          to={`/articulos/${articulo.id}/editar`}
        >
          Editar artículo
        </Link>
      </div>
    </section>
  );
}

