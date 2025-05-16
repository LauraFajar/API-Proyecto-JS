import * as TratamientoModel from '../../models/fitosanitario/tratamiento.model.js';

// Obtiene todos los tratamientos
export async function getAll(req, res) {
    const tratamientos = await TratamientoModel.findAll();
    res.json(tratamientos);
}

// Obtiene un tratamiento por su ID
export async function getById(req, res) {
    const tratamiento = await TratamientoModel.findById(req.params.id);
    if (!tratamiento) return res.status(404).json({ message: 'No encontrado' });
    res.json(tratamiento);
}

// Crea un nuevo tratamiento
export async function create(req, res) {
    const nuevo = await TratamientoModel.create(req.body);
    res.status(201).json(nuevo);
}

// Actualiza un tratamiento existente
export async function update(req, res) {
    const actualizado = await TratamientoModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

// Elimina un tratamiento por su ID
export async function deleteTratamiento(req, res) {
    await TratamientoModel.deleteTratamiento(req.params.id);
    res.json({ message: 'Eliminado' });
}