import pool from '../../config/db.js';

export async function getAll() {
    const result = await pool.query('SELECT * FROM alertas');
    return result.rows;
}

export async function getById(id) {
    const result = await pool.query('SELECT * FROM alertas WHERE id_alerta = $1', [id]);
    return result.rows[0];
}

export async function create({ tipo_alerta, fecha, hora, id_sensor }) {
    const result = await pool.query(
        'INSERT INTO alertas (tipo_alerta, fecha, hora, id_sensor) VALUES ($1, $2, $3, $4) RETURNING *',
        [tipo_alerta, fecha, hora, id_sensor]
    );
    return result.rows[0];
}

export async function update(id, { tipo_alerta, fecha, hora, id_sensor }) {
    const result = await pool.query(
        'UPDATE alertas SET tipo_alerta = $1, fecha = $2, hora = $3, id_Sensor =$4 WHERE id_alerta = $5 RETURNING *',
        [tipo_alerta, fecha, hora, id_sensor, id]
    );
    return result.rows[0];
}

export async function deleteAlerta(id) {
    await pool.query('DELETE FROM alertas WHERE id_alerta = $1', [id]);
}