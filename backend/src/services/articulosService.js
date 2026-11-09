import * as store from '../models/articulosStore.js';

function validarArticulo(data) {
  if (!data.nombre || String(data.nombre).trim().length < 3) {
    const error = new Error('El nombre es requerido y debe tener al menos 3 caracteres');
    error.status = 400;
    throw error;
  }

  if (data.precio === undefined || Number(data.precio) <= 0) {
    const error = new Error('El precio debe ser mayor a cero');
    error.status = 400;
    throw error;
  }

  if (data.stock === undefined || Number(data.stock) < 0) {
    const error = new Error('El stock no puede ser negativo');
    error.status = 400;
    throw error;
  }
  if (data.numeroCategoria === undefined || String(data.numeroCategoria).trim().length < 1) {
    const error = new Error('El número de categoría es requerido y debe tener al menos 1 caracter');
    error.status = 400;
    throw error;
  }
  if (data.descripcionCategoria === undefined || String(data.descripcionCategoria).trim().length < 3) {
    const error = new Error('La descripción de la categoría es requerida y debe tener al menos 3 caracteres');
    error.status = 400;
    throw error;
  }
}

export function consultarTodos() {
  return store.findAll();
}

export function consultarPorId(id) {
  return store.findById(id);
}

export function alta(data) {
  validarArticulo(data);
  return store.create(data);
}

export function modificar(id, data) {
  validarArticulo(data);
  return store.update(id, data);
}

export function baja(id) {
  return store.remove(id);
}
