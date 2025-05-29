import pool from '../../config/db.js';

export async function findAll() {
    const result = await pool.query('SELECT * FROM cultivos');
    return result.rows;
}

export async function findById(id) {
    const result = await pool.query('SELECT * FROM cultivos WHERE id_cultivo = $1', [id]);
    return result.rows[0];
}

export async function create({ tipo_cultivo, id_lote, id_insumo }) {
    const result = await pool.query(
        'INSERT INTO cultivos (tipo_cultivo, id_lote, id_insumo) VALUES ($1, $2, $3) RETURNING *',
        [tipo_cultivo, id_lote, id_insumo]
    );
    return result.rows[0];
}

export async function update(id, { tipo_cultivo, id_lote, id_insumo }) {
    const result = await pool.query(
        'UPDATE cultivos SET tipo_cultivo = $1, id_lote= $2, id_insumo = $3 WHERE id_cultivo = $4 RETURNING *',
        [tipo_cultivo, id_lote, id_insumo, id]
    );
    return result.rows[0];
}

export async function deleteCultivo(id) {
    await pool.query('DELETE FROM cultivos WHERE id_cultivo = $1', [id]);
}