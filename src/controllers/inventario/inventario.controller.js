import * as InventarioModel from '../../models/inventario/inventario.model.js';

// Obtiene todos los registros de inventario
export async function getAll(req, res) {
    const inventarios = await InventarioModel.findAll();
    res.json(inventarios);
}

// Obtiene un registro de inventario por su ID
export async function getById(req, res) {
    const inventario = await InventarioModel.findById(req.params.id);
    if (!inventario) return res.status(404).json({ message: 'Registro de inventario no encontrado' });
    res.json(inventario);
}

// Crea un nuevo registro de inventario
export async function create(req, res) {
    const nuevo = await InventarioModel.create(req.body);
    res.status(201).json(nuevo);
}

// Actualiza un registro de inventario existente
export async function update(req, res) {
    const actualizado = await InventarioModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'Registro de inventario no encontrado' });
    res.json(actualizado);
}

// Elimina un registro de inventario por su ID
export async function deleteInventario(req, res) {
    await InventarioModel.deleteInventario(req.params.id);
    res.json({ message: 'Registro de inventario eliminado' });
}