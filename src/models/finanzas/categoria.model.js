import pool from '../../config/db.js';

export async function findAll() {
    const result = await pool.query('SELECT * FROM categorias');
    return result.rows;
}

export async function findById(id) {
    const result = await pool.query('SELECT * FROM categorias WHERE id_categoria = $1', [id]);
    return result.rows[0];
}

export async function create({ nombre, descripcion }) {
    const result = await pool.query(
        'INSERT INTO categorias (nombre, descripcion) VALUES ($1, $2) RETURNING *',
        [nombre, descripcion]
    );
    return result.rows[0];
}

export async function update(id, { nombre, descripcion }) {
    const result = await pool.query(
        'UPDATE categorias SET nombre = $1, descripcion = $2 WHERE id_categoria = $3 RETURNING *',
        [nombre, descripcion, id]
    );
    return result.rows[0];
}

export async function deleteCategoria(id) {
    await pool.query('DELETE FROM categorias WHERE id_categoria = $1', [id]);
}