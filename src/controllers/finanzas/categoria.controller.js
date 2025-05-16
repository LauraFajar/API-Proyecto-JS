import * as CategoriaModel from '../../models/finanzas/categoria.model.js';

export async function getAll(req, res) {
    const categorias = await CategoriaModel.findAll();
    res.json(categorias);
}

export async function getById(req, res) {
    const categoria = await CategoriaModel.findById(req.params.id);
    if (!categoria) return res.status(404).json({ message: 'No encontrado' });
    res.json(categoria);
}

export async function create(req, res) {
    const nueva = await CategoriaModel.create(req.body);
    res.status(201).json(nueva);
}

export async function update(req, res) {
    const actualizada = await CategoriaModel.update(req.params.id, req.body);
    if (!actualizada) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizada);
}

export async function deleteCategoria(req, res) {
    await CategoriaModel.deleteCategoria(req.params.id);
    res.json({ message: 'Eliminado' });
}