import pool from '../../config/db.js';

export async function findAll() {
    const result = await pool.query('SELECT * FROM almacenes');
    return result.rows;
}

export async function findById(id) {
    const result = await pool.query('SELECT * FROM almacenes WHERE id_almacen = $1', [id]);
    return result.rows[0];
}

export async function create({ nombre_almacen, descripcion }) {
    const result = await pool.query(
        'INSERT INTO almacenes (nombre_almacen, descripcion) VALUES ($1, $2) RETURNING *',
        [nombre_almacen, descripcion]
    );
    return result.rows[0];
}

export async function update(id, { nombre_almacen, descripcion }) {
    const result = await pool.query(
        'UPDATE almacenes SET nombre_almacen = $1, descripcion = $2 WHERE id_almacen = $3 RETURNING *',
        [nombre_almacen, descripcion, id]
    );
    return result.rows[0];
}

export async function deleteAlmacen(id) {
    await pool.query('DELETE FROM almacenes WHERE id_almacen = $1', [id]);
}