import pool from '../../config/db.js';

export async function findAll() {
    const result = await pool.query('SELECT * FROM realiza');
    return result.rows;
}

export async function findById(id) {
    const result = await pool.query('SELECT * FROM realiza WHERE id_realiza = $1', [id]);
    return result.rows[0];
}

export async function create({ usuario, actividad }) {
    const result = await pool.query(
        'INSERT INTO realiza (usuario, actividad) VALUES ($1, $2) RETURNING *',
        [usuario, actividad]
    );
    return result.rows[0];
}

export async function update(id, { usuario, actividad }) {
    const result = await pool.query(
        'UPDATE realiza SET usuario = $1, actividad = $2 WHERE id_realiza = $3 RETURNING *',
        [usuario, actividad, id]
    );
    return result.rows[0];
}

export async function deleteRealiza(id) {
    await pool.query('DELETE FROM realiza WHERE id_realiza = $1', [id]);
}