import pool from '../../config/db.js';

export async function findAll() {
    const result = await pool.query('SELECT * FROM lotes');
    return result.rows;
}

export async function findById(id) {
    const result = await pool.query('SELECT * FROM lotes WHERE id_lote = $1', [id]);
    return result.rows[0];
}

export async function create({ nombre_lote, descripcion }) {
    const result = await pool.query(
        'INSERT INTO almacenes (nombre_lote, descripcion) VALUES ($1, $2) RETURNING *',
        [nombre_lote, descripcion]
    );
    return result.rows[0];
}

export async function update(id, { nombre_lote, descripcion }) {
    const result = await pool.query(
        'UPDATE lotes SET nombre_lote = $1, descripcion = $2 WHERE id_lote = $3 RETURNING *',
        [nombre_lote, descripcion, id]
    );
    return result.rows[0];
}

export async function deleteCultivo(id) {
    await pool.query('DELETE FROM cultivos WHERE id_cultivo = $1', [id]);
}