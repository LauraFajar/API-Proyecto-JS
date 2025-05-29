import pool from '../../config/db.js';

export async function findAll() {
    const result = await pool.query('SELECT * FROM actividades');
    return result.rows;
}

export async function findById(id) {
    const result = await pool.query('SELECT * FROM actividades WHERE id_actividad = $1', [id]);
    return result.rows[0];
}

export async function create({ tipo_actividad, fecha, responsable, detalles, id_cultivo }) {
    const result = await pool.query(
        'INSERT INTO actividades (tipo_actividad, fecha, responsable, detalles, id_cultivo) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [tipo_actividad, fecha, responsable, detalles, id_cultivo]
    );
    return result.rows[0];
}

export async function update(id, { tipo_actividad, fecha, responsable, detalles, id_cultivo }) {
    const result = await pool.query(
        'UPDATE actividades SET tipo_actividad = $1, fecha = $2, responsable = $3, detalles = $4, id_cultivo =5 WHERE id_actividad = $6 RETURNING *',
        [tipo_actividad, fecha, responsable, detalles, id_cultivo, id]
    );
    return result.rows[0];
}

export async function deleteActividad(id) {
    await pool.query('DELETE FROM actividades WHERE id_actividad = $1', [id]);
}