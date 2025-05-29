import * as AlertaModel from '../../models/iot/alerta.model.js';

export async function getAll(req, res) {
    const alertas = await AlertaModel.findAll();
    res.json(alertas);
}

export async function getById(req, res) {
    const alerta = await AlertaModel.findById(req.params.id);
    if (!alerta) return res.status(404).json({ message: 'No encontrado' });
    res.json(alerta);
}

export async function create(req, res) {
    const nuevo = await AlertaModel.create(req.body);
    res.status(201).json(nuevo);
}

export async function update(req, res) {
    const actualizado = await AlertaModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

export async function deleteAlerta(req, res) {
    await AlertaModel.delete(req.params.id);
    res.json({ message: 'Eliminado' });
}