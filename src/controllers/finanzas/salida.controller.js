import * as SalidaModel from '../../models/finanzas/salida.model.js';

export async function getAll(req, res) {
    const salidas = await SalidaModel.findAll();
    res.json(salidas);
}

export async function getById(req, res) {
    const salida = await SalidaModel.findById(req.params.id);
    if (!salida) return res.status(404).json({ message: 'No encontrado' });
    res.json(salida);
}

export async function create(req, res) {
    const nueva = await SalidaModel.create(req.body);
    res.status(201).json(nueva);
}

export async function update(req, res) {
    const actualizada = await SalidaModel.update(req.params.id, req.body);
    if (!actualizada) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizada);
}

export async function deleteSalida(req, res) {
    await SalidaModel.deleteSalida(req.params.id);
    res.json({ message: 'Eliminado' });
}