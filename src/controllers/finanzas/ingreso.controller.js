import * as IngresoModel from '../../models/finanzas/ingreso.model.js';

export async function getAll(req, res) {
    const ingresos = await IngresoModel.findAll();
    res.json(ingresos);
}

export async function getById(req, res) {
    const ingreso = await IngresoModel.findById(req.params.id);
    if (!ingreso) return res.status(404).json({ message: 'No encontrado' });
    res.json(ingreso);
}

export async function create(req, res) {
    const nuevo = await IngresoModel.create(req.body);
    res.status(201).json(nuevo);
}

export async function update(req, res) {
    const actualizado = await IngresoModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

export async function deleteIngreso(req, res) {
    await IngresoModel.deleteIngreso(req.params.id);
    res.json({ message: 'Eliminado' });
}