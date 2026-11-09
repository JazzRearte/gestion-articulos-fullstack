
# Gestión de Artículos | Aplicación Full Stack

Aplicación web desarrollada como proyecto académico de **Desarrollo de Software (UTN FRC)**. Permite administrar un catálogo de artículos mediante una interfaz en **React** conectada a una **API REST** implementada con **Node.js y Express**.

## Vista previa

![Pantalla principal](docs/pantalla-principal.png)

![Listado de artículos](docs/listado-articulos.png)

## Funcionalidades

- Consultar y filtrar artículos.
- Visualizar el detalle de un artículo.
- Crear, editar y eliminar artículos.
- Navegar mediante React Router.
- Reutilizar formularios para altas y modificaciones.
- Consumir una API REST desde React.

**Estado:** CRUD probado correctamente en entorno local.

## Tecnologías utilizadas

| Frontend | Backend | Comunicación |
| --- | --- | --- |
| React 18, Vite 5, React Router 6, JavaScript, HTML y CSS | Node.js, Express 4 | API REST, HTTP, JSON, Fetch API, CORS |

**Persistencia:** almacenamiento en memoria, sin base de datos.

## Estructura del proyecto

```text
gestion-articulos-fullstack/
├── backend/
├── frontend/
├── docs/
│   ├── pantalla-principal.png
│   └── listado-articulos.png
└── README.md
```

## Instalación y ejecución

Requisitos: Node.js y npm.

### Backend

```bash
cd backend
npm install
npm run dev
```

Servidor: http://localhost:3000

### Frontend

Desde otra terminal, ubicada en la raíz del proyecto:

```bash
cd frontend
npm install
npm run dev
```

Aplicación: http://localhost:5173/articulos

## Endpoints de la API

| Método | Ruta | Descripción |
| --- | --- | --- |
| GET | `/api/articulos` | Listar artículos |
| GET | `/api/articulos/:id` | Consultar detalle |
| POST | `/api/articulos` | Crear artículo |
| PUT | `/api/articulos/:id` | Actualizar artículo |
| DELETE | `/api/articulos/:id` | Eliminar artículo |

## Rutas del frontend

- `/` — Inicio
- `/articulos` — Listado
- `/articulos/nuevo` — Crear
- `/articulos/:id` — Detalle
- `/articulos/:id/editar` — Editar
- `/acerca` — Información

## Decisiones técnicas y limitaciones

- Separación entre frontend y backend.
- Componentes y formularios reutilizables.
- Backend organizado mediante rutas y servicios.
- Datos almacenados en memoria: los cambios se pierden al reiniciar el servidor.
- Configuración de API y CORS para desarrollo local.

## Contexto académico

Proyecto desarrollado en la asignatura **Desarrollo de Software**, Ingeniería en Sistemas de Información, Universidad Tecnológica Nacional — Facultad Regional Córdoba.

## Autora

**Jazmín Rearte**

[Mi perfil de GitHub](https://github.com/JazzRearte)
