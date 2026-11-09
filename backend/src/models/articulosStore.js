let articulos = [
  { id: 1, nombre: 'Notebook Lenovo ThinkPad', precio: 1250000, stock: 8, numeroCategoria: '1', descripcionCategoria: 'Electrónica' },
  { id: 2, nombre: 'Mouse Logitech M280', precio: 18500, stock: 25, numeroCategoria: '1', descripcionCategoria: 'Electrónica' },
  { id: 3, nombre: 'Teclado mecánico', precio: 78000, stock: 12, numeroCategoria: '1', descripcionCategoria: 'Electrónica' }
];

let nextId = 4;

export function findAll() {
  return articulos;
}

export function findById(id) {
  return articulos.find((articulo) => articulo.id === Number(id)) ?? null;
}

export function create(data) {
  const nuevo = {
    id: nextId++,
    nombre: data.nombre,
    precio: Number(data.precio),
    stock: Number(data.stock),
    numeroCategoria: data.numeroCategoria,
    descripcionCategoria: data.descripcionCategoria
  };
  articulos.push(nuevo);
  return nuevo;
}

export function update(id, data) {
  const articulo = findById(id);
  if (!articulo) return null;

  articulo.nombre = data.nombre;
  articulo.precio = Number(data.precio);
  articulo.stock = Number(data.stock);
  articulo.numeroCategoria = data.numeroCategoria;
  articulo.descripcionCategoria = data.descripcionCategoria;
  return articulo;
}

export function remove(id) {
  const inicial = articulos.length;
  articulos = articulos.filter((articulo) => articulo.id !== Number(id));
  return inicial - articulos.length;
}
