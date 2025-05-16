import * as RealizaModel from '../../models/usuarios/realiza.model.js';

export async function getAll(req, res) {
    const realiza = await RealizaModel.findAll();
    res.json(realiza);
}

export async function getById(req, res) {
    const realiza = await RealizaModel.findById(req.params.id);
    if (!realiza) return res.status(404).json({ message: 'No encontrado' });
    res.json(realiza);
}

export async function create(req, res) {
    const nuevo = await RealizaModel.create(req.body);
    res.status(201).json(nuevo);
}

export async function update(req, res) {
    const actualizado = await RealizaModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

export async function deleteRealiza(req, res) {
    await RealizaModel.deleteRealiza(req.params.id);
    res.json({ message: 'Eliminado' });
}