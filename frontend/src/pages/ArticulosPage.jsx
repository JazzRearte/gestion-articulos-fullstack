import React, { useEffect, useState } from 'react';
import { ArticulosTable } from '../components/ArticulosTable.jsx';
import {
  API_BASE_URL,
  eliminarArticulo,
  obtenerArticulos
} from '../services/articulosApi.js';

export function ArticulosPage({ onTotalChange }) {
  const [articulos, setArticulos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  const articulosFiltrados = articulos.filter((articulo) =>
    articulo.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  async function cargarArticulos() {
    setCargando(true);
    setError('');

    try {
      const data = await obtenerArticulos();
      setArticulos(data);
      onTotalChange(data.length);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    cargarArticulos();
  }, []);

  async function borrarArticulo(id) {
    setMensaje('');
    setError('');

    try {
      await eliminarArticulo(id);
      setMensaje('Artículo eliminado correctamente');
      await cargarArticulos();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <section className="status-panel">
        <span>GET /api/articulos</span>
        <span>GET /api/articulos/:id</span>
        <span>POST /api/articulos</span>
        <span>PUT /api/articulos/:id</span>
        <span>DELETE /api/articulos/:id</span>
        <span>API: {API_BASE_URL}</span>
      </section>

      <section className="route-explanation card">
        <h2>Rutas del CRUD</h2>
        <div className="route-grid route-grid-four">
          <div>
            <strong>/articulos</strong>
            <span>Listado</span>
          </div>
          <div>
            <strong>/articulos/nuevo</strong>
            <span>Alta con el formulario reutilizable</span>
          </div>
          <div>
            <strong>/articulos/:id</strong>
            <span>Detalle</span>
          </div>
          <div>
            <strong>/articulos/:id/editar</strong>
            <span>Edición con el mismo formulario</span>
          </div>
        </div>
      </section>

      {mensaje && <div className="alert ok">{mensaje}</div>}
      {error && <div className="alert error">{error}</div>}
      {cargando && <div className="alert loading">Cargando artículos...</div>}

      <input
        type="text"
        value={filtro}
        onChange={(event) => setFiltro(event.target.value)}
        placeholder="Filtrar artículos"
        aria-label="Filtrar artículos"
      />

      <ArticulosTable
        articulos={articulosFiltrados}
        onEliminar={borrarArticulo}
      />
    </>
  );
}
