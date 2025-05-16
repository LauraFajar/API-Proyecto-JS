import * as RolModel from '../../models/usuarios/rol.model.js';

export async function getAll(req, res) {
    const roles = await RolModel.findAll();
    res.json(roles);
}

export async function getById(req, res) {
    const rol = await RolModel.findById(req.params.id);
    if (!rol) return res.status(404).json({ message: 'No encontrado' });
    res.json(rol);
}

export async function create(req, res) {
    const nuevo = await RolModel.create(req.body);
    res.status(201).json(nuevo);
}

export async function update(req, res) {
    const actualizado = await RolModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

export async function deleteRol(req, res) {
    await RolModel.deleteRol(req.params.id);
    res.json({ message: 'Eliminado' });
}