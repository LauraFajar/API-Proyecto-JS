import * as TipoRolModel from '../../models/usuarios/tiporol.model.js';

export async function getAll(req, res) {
    const tipos = await TipoRolModel.findAll();
    res.json(tipos);
}

export async function getById(req, res) {
    const tipo = await TipoRolModel.findById(req.params.id);
    if (!tipo) return res.status(404).json({ message: 'No encontrado' });
    res.json(tipo);
}

export async function create(req, res) {
    const nuevo = await TipoRolModel.create(req.body);
    res.status(201).json(nuevo);
}

export async function update(req, res) {
    const actualizado = await TipoRolModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

export async function deleteTipoRol(req, res) {
    await TipoRolModel.deleteTipoRol(req.params.id);
    res.json({ message: 'Eliminado' });
}