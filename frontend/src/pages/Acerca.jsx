import React from 'react';
export function Acerca() {
  return (
    <section className="card intro-card">
      <h2>Acerca del ejemplo</h2>
      <p>
        El frontend corre en <code>http://localhost:5173</code> y consume el backend Express
        en <code>http://localhost:3000</code>. El backend habilita CORS para permitir ese origen.
      </p>
      <ul className="concept-list">
        <li><strong>Props:</strong> el padre pasa datos como <code>articulos</code> y funciones como <code>onEditar</code>.</li>
        <li><strong>Callbacks:</strong> los hijos avisan eventos al padre invocando funciones recibidas.</li>
        <li><strong>Router:</strong> <code>Routes</code>, <code>Route</code>, <code>Link</code>, <code>NavLink</code>, <code>useParams</code> y <code>Navigate</code>.</li>
        <li><strong>API:</strong> GET, POST, PUT y DELETE contra <code>/api/articulos</code>.</li>
      </ul>
    </section>
  );
}
