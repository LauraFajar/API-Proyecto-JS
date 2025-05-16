import pool from '../../config/db.js';

export async function findAll() {
    const result = await pool.query('SELECT * FROM salidas');
    return result.rows;
}

export async function findById(id) {
    const result = await pool.query('SELECT * FROM salidas WHERE id_salida = $1', [id]);
    return result.rows[0];
}

export async function create({ nombre, codigo, cantidad, id_categorias, id_almacenes, observacion, fecha_salida }) {
    const result = await pool.query(
        `INSERT INTO salidas (nombre, codigo, cantidad, id_categorias, id_almacenes, observacion, fecha_salida)
         VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [nombre, codigo, cantidad, id_categorias, id_almacenes, observacion, fecha_salida]
    );
    return result.rows[0];
}

export async function update(id, { nombre, codigo, cantidad, id_categorias, id_almacenes, observacion, fecha_salida }) {
    const result = await pool.query(
        `UPDATE salidas SET nombre = $1, codigo = $2, cantidad = $3, id_categorias = $4, id_almacenes = $5, observacion = $6, fecha_salida = $7
         WHERE id_salida = $8 RETURNING *`,
        [nombre, codigo, cantidad, id_categorias, id_almacenes, observacion, fecha_salida, id]
    );
    return result.rows[0];
}

export async function deleteSalida(id) {
    await pool.query('DELETE FROM salidas WHERE id_salida = $1', [id]);
}