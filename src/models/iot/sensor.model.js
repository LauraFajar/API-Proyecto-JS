import pool from '../../config/db.js';

export async function getAll() {
    const result = await pool.query('SELECT * FROM sensores');
    return result.rows;
}

export async function getById(id) {
    const result = await pool.query('SELECT * FROM sensores WHERE id_sensor = $1', [id]);
    return result.rows[0];
}

export async function create({ tipo_sensor, id_sublote, estado }) {
    const result = await pool.query(
        'INSERT INTO sensores (tipo_sensor, id_sublote, estado) VALUES ($1, $2, $3) RETURNING *',
        [tipo_sensor, id_sublote, estado]
    );
    return result.rows[0];
}

export async function update(id, { tipo_sensor, id_sublote, estado  }) {
    const result = await pool.query(
        'UPDATE sensores SET tipo_sensor = $1, id_sublote = $2, estado = $3 WHERE id_sensor = $4 RETURNING *',
        [tipo_sensor, id_sublote, estado, id]
    );
    return result.rows[0];
}

export async function deleteSensor(id) {
    await pool.query('DELETE FROM sensores WHERE id_sensor = $1', [id]);
}
