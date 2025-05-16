import pool from '../../config/db.js';

export async function findAll() {
    const result = await pool.query('SELECT * FROM rol');
    return result.rows;
}

export async function findById(id) {
    const result = await pool.query('SELECT * FROM rol WHERE id_rol = $1', [id]);
    return result.rows[0];
}

export async function create({ nombre_rol, id_tipo_rol }) {
    const result = await pool.query(
        'INSERT INTO rol (nombre_rol, id_tipo_rol) VALUES ($1, $2) RETURNING *',
        [nombre_rol, id_tipo_rol]
    );
    return result.rows[0];
}

export async function update(id, { nombre_rol, id_tipo_rol }) {
    const result = await pool.query(
        'UPDATE rol SET nombre_rol = $1, id_tipo_rol = $2 WHERE id_rol = $3 RETURNING *',
        [nombre_rol, id_tipo_rol, id]
    );
    return result.rows[0];
}

export async function deleteRol(id) {
    await pool.query('DELETE FROM rol WHERE id_rol = $1', [id]);
}