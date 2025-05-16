import pool from '../../config/db.js';

export async function findAll() {
    const result = await pool.query('SELECT * FROM insumos');
    return result.rows;
}

export async function findById(id) {
    const result = await pool.query('SELECT * FROM insumos WHERE id_insumo = $1', [id]);
    return result.rows[0];
}

export async function create({ nombre_insumo, codigo, fecha_entrada, observacion, id_categoria, id_almacen, id_salida }) {
    const result = await pool.query(
        `INSERT INTO insumos (nombre_insumo, codigo, fecha_entrada, observacion, id_categoria, id_almacen, id_salida)
         VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [nombre_insumo, codigo, fecha_entrada, observacion, id_categoria, id_almacen, id_salida]
    );
    return result.rows[0];
}

export async function update(id, { nombre_insumo, codigo, fecha_entrada, observacion, id_categoria, id_almacen, id_salida }) {
    const result = await pool.query(
        `UPDATE insumos SET nombre_insumo = $1, codigo = $2, fecha_entrada = $3, observacion = $4,
         id_categoria = $5, id_almacen = $6, id_salida = $7 WHERE id_insumo = $8 RETURNING *`,
        [nombre_insumo, codigo, fecha_entrada, observacion, id_categoria, id_almacen, id_salida, id]
    );
    return result.rows[0];
}

export async function deleteInsumo(id) {
    await pool.query('DELETE FROM insumos WHERE id_insumo = $1', [id]);
}