import pool from '../../config/db.js';

export async function findAll() {
    const result = await pool.query('SELECT * FROM usuarios');
    return result.rows;
}

export async function findById(id) {
    const result = await pool.query('SELECT * FROM usuarios WHERE id_usuarios = $1', [id]);
    return result.rows[0];
}

export async function create({ nombres, email, password, tipo_documento, numero_documento, id_rol }) {
    const result = await pool.query(
        `INSERT INTO usuarios (nombres, email, password, tipo_documento, numero_documento, id_rol)
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [nombres, email, password, tipo_documento, numero_documento, id_rol]
    );
    return result.rows[0];
}

export async function update(id, { nombres, email, password, tipo_documento, numero_documento, id_rol }) {
    const result = await pool.query(
        `UPDATE usuarios SET nombres = $1, email = $2, password = $3, tipo_documento = $4, numero_documento = $5, id_rol = $6
         WHERE id_usuarios = $7 RETURNING *`,
        [nombres, email, password, tipo_documento, numero_documento, id_rol, id]
    );
    return result.rows[0];
}

export async function deleteUsuario(id) {
    await pool.query('DELETE FROM usuarios WHERE id_usuarios = $1', [id]);
}