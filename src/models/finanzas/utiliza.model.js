import pool from '../../config/db.js';

export async function findAll() {
    const result = await pool.query('SELECT * FROM utiliza');
    return result.rows;
}

export async function findById(id) {
    const result = await pool.query('SELECT * FROM utiliza WHERE id_utiliza = $1', [id]);
    return result.rows[0];
}

export async function create({ id_actividades, id_insumos }) {
    const result = await pool.query(
        'INSERT INTO utiliza (id_actividades, id_insumos) VALUES ($1, $2) RETURNING *',
        [id_actividades, id_insumos]
    );
    return result.rows[0];
}

export async function update(id, { id_actividades, id_insumos }) {
    const result = await pool.query(
        'UPDATE utiliza SET id_actividades = $1, id_insumos = $2 WHERE id_utiliza = $3 RETURNING *',
        [id_actividades, id_insumos, id]
    );
    return result.rows[0];
}

export async function deleteUtiliza(id) {
    await pool.query('DELETE FROM utiliza WHERE id_utiliza = $1', [id]);
}