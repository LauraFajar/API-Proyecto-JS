import pool from '../../config/db.js';

export async function findAll() {
    const result = await pool.query('SELECT * FROM tiene');
    return result.rows;
}

export async function findById(id) {
    const result = await pool.query('SELECT * FROM tiene WHERE id_tiene = $1', [id]);
    return result.rows[0];
}

export async function create({ cultivo, epa }) {
    const result = await pool.query(
        'INSERT INTO tiene (cultivo, epa) VALUES ($1, $2) RETURNING *',
        [cultivo, epa]
    );
    return result.rows[0];
}

export async function update(id, { cultivo, epa }) {
    const result = await pool.query(
        'UPDATE tiene SET cultivo = $1, epa = $2 WHERE id_tiene = $6 RETURNING *',
        [cultivo, epa, id]
    );
    return result.rows[0];
}

export async function deleteTiene(id) {
    await pool.query('DELETE FROM tiene WHERE id_tiene = $1', [id]);
}