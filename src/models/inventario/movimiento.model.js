import pool from '../../config/db.js';

// Obtiene todos los registros de la tabla movimientos
export async function findAll() {
    const result = await pool.query('SELECT * FROM movimientos');
    return result.rows;
}

// Busca un movimiento por su ID
export async function findById(id) {
    const result = await pool.query('SELECT * FROM movimientos WHERE id_movimiento = $1', [id]);
    return result.rows[0];
}

// Crea un nuevo movimiento
export async function create({ tipo_movimiento, id_insumo, cantidad, unidad_medida, fecha_movimiento }) {
    const result = await pool.query(
        'INSERT INTO movimientos (tipo_movimiento, id_insumo, cantidad, unidad_medida, fecha_movimiento) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [tipo_movimiento, id_insumo, cantidad, unidad_medida, fecha_movimiento]
    );
    return result.rows[0];
}

// Actualiza un movimiento existente por su ID
export async function update(id, { tipo_movimiento, id_insumo, cantidad, unidad_medida, fecha_movimiento }) {
    const result = await pool.query(
        'UPDATE movimientos SET tipo_movimiento = $1, id_insumo = $2, cantidad = $3, unidad_medida = $4, fecha_movimiento = $5 WHERE id_movimiento = $6 RETURNING *',
        [tipo_movimiento, id_insumo, cantidad, unidad_medida, fecha_movimiento, id]
    );
    return result.rows[0];
}

// Elimina un movimiento por su ID
export async function deleteMovimiento(id) {
    await pool.query('DELETE FROM movimientos WHERE id_movimiento = $1', [id]);
}