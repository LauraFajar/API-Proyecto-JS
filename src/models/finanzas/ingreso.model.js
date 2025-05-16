import pool from '../../config/db.js';

export async function findAll() {
    const result = await pool.query('SELECT * FROM ingresos');
    return result.rows;
}

export async function findById(id) {
    const result = await pool.query('SELECT * FROM ingresos WHERE id_ingreso = $1', [id]);
    return result.rows[0];
}

export async function create({ fecha_ingreso, monto, descripcion, id_insumo }) {
    const result = await pool.query(
        'INSERT INTO ingresos (fecha_ingreso, monto, descripcion, id_insumo) VALUES ($1, $2, $3, $4) RETURNING *',
        [fecha_ingreso, monto, descripcion, id_insumo]
    );
    return result.rows[0];
}

export async function update(id, { fecha_ingreso, monto, descripcion, id_insumo }) {
    const result = await pool.query(
        'UPDATE ingresos SET fecha_ingreso = $1, monto = $2, descripcion = $3, id_insumo = $4 WHERE id_ingreso = $5 RETURNING *',
        [fecha_ingreso, monto, descripcion, id_insumo, id]
    );
    return result.rows[0];
}

export async function deleteIngreso(id) {
    await pool.query('DELETE FROM ingresos WHERE id_ingreso = $1', [id]);
}