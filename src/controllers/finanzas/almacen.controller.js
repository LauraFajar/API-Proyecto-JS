import * as AlmacenModel from '../../models/finanzas/almacen.model.js';

export async function getAll(req, res) {
    const almacenes = await AlmacenModel.findAll();
    res.json(almacenes);
}

export async function getById(req, res) {
    const almacen = await AlmacenModel.findById(req.params.id);
    if (!almacen) return res.status(404).json({ message: 'No encontrado' });
    res.json(almacen);
}

export async function create(req, res) {
    const nuevo = await AlmacenModel.create(req.body);
    res.status(201).json(nuevo);
}

export async function update(req, res) {
    const actualizado = await AlmacenModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

export async function deleteAlmacen(req, res) {
    await AlmacenModel.delete(req.params.id);
    res.json({ message: 'Eliminado' });
}