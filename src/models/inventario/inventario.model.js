import pool from '../../config/db.js';

// Obtiene todos los registros de la tabla inventario
export async function findAll() {
    const result = await pool.query('SELECT * FROM inventario');
    return result.rows;
}

// Busca un registro de inventario por su ID
export async function findById(id) {
    const result = await pool.query('SELECT * FROM inventario WHERE id_inventario = $1', [id]);
    return result.rows[0];
}

// Crea un nuevo registro en la tabla inventario
export async function create({ id_insumo, cantidad_stock, unidad_medida, fecha }) {
    const result = await pool.query(
        'INSERT INTO inventario (id_insumo, cantidad_stock, unidad_medida, fecha) VALUES ($1, $2, $3, $4) RETURNING *',
        [id_insumo, cantidad_stock, unidad_medida, fecha]
    );
    return result.rows[0];
}

// Actualiza un registro existente de inventario por su ID
export async function update(id, { id_insumo, cantidad_stock, unidad_medida, fecha }) {
    const result = await pool.query(
        'UPDATE inventario SET id_insumo = $1, cantidad_stock = $2, unidad_medida = $3, fecha = $4 WHERE id_inventario = $5 RETURNING *',
        [id_insumo, cantidad_stock, unidad_medida, fecha, id]
    );
    return result.rows[0];
}

// Elimina un registro de inventario por su ID
export async function deleteInventario(id) {
    await pool.query('DELETE FROM inventario WHERE id_inventario = $1', [id]);
}