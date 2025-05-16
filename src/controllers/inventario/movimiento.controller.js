import * as MovimientoModel from '../../models/inventario/movimiento.model.js';

// Obtiene todos los movimientos
export async function getAll(req, res) {
    const movimientos = await MovimientoModel.findAll();
    res.json(movimientos);
}

// Obtiene un movimiento por su ID
export async function getById(req, res) {
    const movimiento = await MovimientoModel.findById(req.params.id);
    if (!movimiento) return res.status(404).json({ message: 'Movimiento no encontrado' });
    res.json(movimiento);
}

// Crea un nuevo movimiento
export async function create(req, res) {
    // Aquí puedes agregar validación de req.body si lo necesitas
    const nuevo = await MovimientoModel.create(req.body);
    res.status(201).json(nuevo);
}

// Actualiza un movimiento existente
export async function update(req, res) {
    // Aquí puedes agregar validación de req.body si lo necesitas
    const actualizado = await MovimientoModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'Movimiento no encontrado' });
    res.json(actualizado);
}

// Elimina un movimiento por su ID
export async function deleteMovimiento(req, res) {
    await MovimientoModel.deleteMovimiento(req.params.id);
    res.json({ message: 'Movimiento eliminado exitosamente' });
}