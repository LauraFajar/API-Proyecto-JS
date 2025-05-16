import pool from '../../config/db.js';

export async function findAll() {
    const result = await pool.query('SELECT * FROM tiporol');
    return result.rows;
}

export async function findById(id) {
    const result = await pool.query('SELECT * FROM tiporol WHERE id_tipo_rol = $1', [id]);
    return result.rows[0];
}

export async function create({ descripcion }) {
    const result = await pool.query(
        'INSERT INTO tiporol (descripcion) VALUES ($1) RETURNING *',
        [descripcion]
    );
    return result.rows[0];
}

export async function update(id, { descripcion }) {
    const result = await pool.query(
        'UPDATE tiporol SET descripcion = $1 WHERE id_tipo_rol = $2 RETURNING *',
        [descripcion, id]
    );
    return result.rows[0];
}

export async function deleteTipoRol(id) {
    await pool.query('DELETE FROM tiporol WHERE id_tipo_rol = $1', [id]);
}