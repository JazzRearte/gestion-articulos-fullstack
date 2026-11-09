
import React from 'react';

export function ArticuloForm({
  form,
  modo = 'alta',
  onChange,
  onSubmit,
  onCancelar,
  guardando = false
}) {
  const esEdicion = modo === 'edicion';

  return (
    <form className="card form form-card" onSubmit={onSubmit}>
      <p className="eyebrow">
        {esEdicion ? 'PUT /api/articulos/:id' : 'POST /api/articulos'}
      </p>

      <h2>{esEdicion ? 'Modificar artículo' : 'Alta de artículo'}</h2>

      <label>
        Nombre
        <input
          name="nombre"
          value={form.nombre}
          onChange={onChange}
          placeholder="Ej: Monitor 24 pulgadas"
          disabled={guardando}
          required
        />
      </label>

      <label>
        Precio
        <input
          name="precio"
          type="number"
          min="0"
          value={form.precio}
          onChange={onChange}
          placeholder="Ej: 220000"
          disabled={guardando}
          required
        />
      </label>

      <label>
        Stock
        <input
          name="stock"
          type="number"
          min="0"
          value={form.stock}
          onChange={onChange}
          placeholder="Ej: 10"
          disabled={guardando}
          required
        />
      </label>

      <label>
        Número de categoría
        <input
          name="numeroCategoria"
          value={form.numeroCategoria}
          onChange={onChange}
          placeholder="Ej: 1"
          disabled={guardando}
          required
        />
      </label>

      <label>
        Descripción de categoría
        <input
          name="descripcionCategoria"
          value={form.descripcionCategoria}
          onChange={onChange}
          placeholder="Ej: Electrónica"
          disabled={guardando}
          required
          minLength={3}
        />
      </label>

      <div className="actions">
        <button type="submit" disabled={guardando}>
          {guardando
            ? 'Guardando...'
            : esEdicion
              ? 'Guardar cambios'
              : 'Crear artículo'}
        </button>

        <button
          type="button"
          className="secondary"
          onClick={onCancelar}
          disabled={guardando}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
