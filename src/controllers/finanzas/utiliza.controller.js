import * as UtilizaModel from '../../models/finanzas/utiliza.model.js';

export async function getAll(req, res) {
    const utiliza = await UtilizaModel.findAll();
    res.json(utiliza);
}

export async function getById(req, res) {
    const utiliza = await UtilizaModel.findById(req.params.id);
    if (!utiliza) return res.status(404).json({ message: 'No encontrado' });
    res.json(utiliza);
}

export async function create(req, res) {
    const nuevo = await UtilizaModel.create(req.body);
    res.status(201).json(nuevo);
}

export async function update(req, res) {
    const actualizado = await UtilizaModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

export async function deleteUtiliza(req, res) {
    await UtilizaModel.deleteUtiliza(req.params.id);
    res.json({ message: 'Eliminado' });
}

export async function getActividadesInsumos(req, res) {
    try {
        const result = await pool.query(`
            SELECT 
                a.id_actividad,
                a.tipo_actividad,
                a.fecha,
                a.responsable,
                a.detalles,
                i.id_insumo,
                i.nombre_insumo,
                i.codigo,
                i.fecha_entrada,
                i.observacion,
                i.id_categoria,
                i.id_almacen,
                i.id_salida
            FROM utiliza u
            JOIN actividades a ON u.id_actividades = a.id_actividad
            JOIN insumos i ON u.id_insumos = i.id_insumo
            ORDER BY a.id_actividad, i.id_insumo
        `);
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener actividades con insumos', error: error.message });
    }
}