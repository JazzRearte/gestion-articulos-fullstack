import express from 'express';
import cors from 'cors';
import { articulosRouter } from './routes/articulosRouter.js';

const app = express();
const PORT = 3000;

// Frontend hardcodeado para desarrollo con Vite.
// El browser llama directamente a http://localhost:3000 y Express habilita CORS.
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use(articulosRouter);

app.use((req, res) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status ?? 500).json({
    mensaje: error.message ?? 'Error interno del servidor'
  });
});

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
  console.log('CORS habilitado para http://localhost:5173');
});
