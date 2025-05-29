import * as SubloteModel from '../../models/trazabilidad/sublote.model.js';

export async function getAll(req, res) {
    const sublotes = await SubloteModel.findAll();
    res.json(sublotes);
}

export async function getById(req, res) {
    const sublote = await SubloteModel.findById(req.params.id);
    if (!sublote) return res.status(404).json({ message: 'No encontrado' });
    res.json(sublote);
}

export async function create(req, res) {
    const nuevo = await SubloteModel.create(req.body);
    res.status(201).json(nuevo);
}

export async function update(req, res) {
    const actualizado = await SubloteModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

export async function deleteSublote(req, res) {
    await SubloteModel.delete(req.params.id);
    res.json({ message: 'Eliminado' });
}