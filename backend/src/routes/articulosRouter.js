import express from 'express';
import * as articulosService from '../services/articulosService.js';

export const articulosRouter = express.Router();

articulosRouter.get('/api/articulos', (req, res) => {
  const articulos = articulosService.consultarTodos();
  res.json(articulos);
});

articulosRouter.get('/api/articulos/:id', (req, res) => {
  const articulo = articulosService.consultarPorId(req.params.id);
  if (!articulo) {
    return res.status(404).json({ mensaje: 'Artículo no encontrado' });
  }
  res.json(articulo);
});

articulosRouter.post('/api/articulos', (req, res, next) => {
  try {
    const nuevo = articulosService.alta(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    next(error);
  }
});

articulosRouter.put('/api/articulos/:id', (req, res, next) => {
  try {
    const actualizado = articulosService.modificar(req.params.id, req.body);
    if (!actualizado) {
      return res.status(404).json({ mensaje: 'Artículo no encontrado' });
    }
    res.json(actualizado);
  } catch (error) {
    next(error);
  }
});

articulosRouter.delete('/api/articulos/:id', (req, res) => {
  const filasAfectadas = articulosService.baja(req.params.id);
  if (filasAfectadas === 0) {
    return res.status(404).json({ mensaje: 'Artículo no encontrado' });
  }
  res.status(204).end();
});
