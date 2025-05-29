import pool from '../../config/db.js';

export async function findAll() {
    const result = await pool.query('SELECT * FROM sublotes');
    return result.rows;
}

export async function findById(id) {
    const result = await pool.query('SELECT * FROM sublotes WHERE id_sublote = $1', [id]);
    return result.rows[0];
}

export async function create({ descripcion, id_lote, ubicacion }) {
    const result = await pool.query(
        'INSERT INTO sublotes (descripcion, id_lote, ubicacion) VALUES ($1, $2, $3) RETURNING *',
        [descripcion, id_lote, ubicacion]
    );
    return result.rows[0];
}

export async function update(id, { descripcion, id_lote, ubicacion }) {
    const result = await pool.query(
        'UPDATE sublotes SET descripcion = $1, id_lote = $2, ubicacion = $3 WHERE id_cultivo = $4 RETURNING *',
        [descripcion, id_lote, ubicacion, id]
    );
    return result.rows[0];
}

export async function deleteSublote(id) {
    await pool.query('DELETE FROM sublotes WHERE id_sublote = $1', [id]);
}