
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArticuloForm } from '../components/ArticuloForm.jsx';
import {
  actualizarArticulo,
  crearArticulo,
  obtenerArticulo,
  obtenerArticulos
} from '../services/articulosApi.js';

const formInicial = {
  nombre: '',
  precio: '',
  stock: '',
  numeroCategoria: '',
  descripcionCategoria: ''
};

export function ArticuloFormPage({ onTotalChange }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const esEdicion = Boolean(id);

  const [form, setForm] = useState(formInicial);
  const [cargando, setCargando] = useState(esEdicion);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!esEdicion) {
      setForm(formInicial);
      setCargando(false);
      return;
    }

    async function cargarArticulo() {
      setCargando(true);
      setError('');

      try {
        const articulo = await obtenerArticulo(id);

        setForm({
          nombre: articulo.nombre,
          precio: String(articulo.precio),
          stock: String(articulo.stock),
          numeroCategoria: String(articulo.numeroCategoria ?? ''),
          descripcionCategoria: articulo.descripcionCategoria ?? ''
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }

    cargarArticulo();
  }, [id, esEdicion]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  async function actualizarCantidadTotal() {
    const articulos = await obtenerArticulos();
    onTotalChange(articulos.length);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setGuardando(true);
    setError('');

    try {
      const datos = {
        nombre: form.nombre.trim(),
        precio: Number(form.precio),
        stock: Number(form.stock),
        numeroCategoria: form.numeroCategoria.trim(),
        descripcionCategoria: form.descripcionCategoria.trim()
      };

      if (esEdicion) {
        const actualizado = await actualizarArticulo(id, datos);

        navigate(`/articulos/${actualizado.id}`, {
          replace: true,
          state: {
            mensaje: 'Artículo actualizado correctamente'
          }
        });
      } else {
        const creado = await crearArticulo(datos);

        await actualizarCantidadTotal();

        navigate(`/articulos/${creado.id}`, {
          replace: true,
          state: {
            mensaje: 'Artículo creado correctamente'
          }
        });
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setGuardando(false);
    }
  }

  function cancelar() {
    if (esEdicion) {
      navigate(`/articulos/${id}`);
    } else {
      navigate('/articulos');
    }
  }

  if (cargando) {
    return (
      <div className="alert loading">
        Cargando artículo #{id} para editar...
      </div>
    );
  }

  if (error && esEdicion && form.nombre === '') {
    return (
      <section className="card intro-card">
        <h2>No se pudo cargar el artículo</h2>
        <p className="alert error">{error}</p>
        <Link className="link-button" to="/articulos">
          Volver al listado
        </Link>
      </section>
    );
  }

  return (
    <section className="form-page">
      <div className="card form-route-info">
        <p className="eyebrow">Formulario reutilizado</p>

        <h2>
          {esEdicion
            ? `Ruta /articulos/${id}/editar`
            : 'Ruta /articulos/nuevo'}
        </h2>

        <p>
          La página decide si está en modo alta o edición
          a partir de <code>useParams()</code>.
          El componente <code>ArticuloForm</code>
          se reutiliza en ambos casos.
        </p>

        <div className="flow-mini">
          <span>Ruta</span>
          <strong>→</strong>
          <span>ArticuloFormPage</span>
          <strong>→</strong>
          <span>ArticuloForm</span>
          <strong>→</strong>
          <span>{esEdicion ? 'PUT' : 'POST'}</span>
        </div>
      </div>

      {error && <div className="alert error">{error}</div>}

      <ArticuloForm
        form={form}
        modo={esEdicion ? 'edicion' : 'alta'}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancelar={cancelar}
        guardando={guardando}
      />
    </section>
  );
}
