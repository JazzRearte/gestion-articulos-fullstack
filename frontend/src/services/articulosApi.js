// Dominio hardcodeado del backend.
// El frontend llama directamente al servidor Express.
export const API_BASE_URL = 'http://localhost:3000';
const ARTICULOS_URL = `${API_BASE_URL}/api/articulos`;

async function leerRespuesta(response) {
  if (response.status === 204) return null;

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.mensaje ?? 'Error al consumir la API');
  }

  return data;
}

export async function obtenerArticulos() {
  const response = await fetch(ARTICULOS_URL);
  return leerRespuesta(response);
}

export async function obtenerArticulo(id) {
  const response = await fetch(`${ARTICULOS_URL}/${id}`);
  return leerRespuesta(response);
}

export async function crearArticulo(articulo) {
  const response = await fetch(ARTICULOS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(articulo)
  });
  return leerRespuesta(response);
}

export async function actualizarArticulo(id, articulo) {
  const response = await fetch(`${ARTICULOS_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(articulo)
  });
  return leerRespuesta(response);
}

export async function eliminarArticulo(id) {
  const response = await fetch(`${ARTICULOS_URL}/${id}`, {
    method: 'DELETE'
  });
  return leerRespuesta(response);
}
