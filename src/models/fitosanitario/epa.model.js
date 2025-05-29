import pool from '../../config/db.js';

// Obtiene todos los registros de la tabla epa
export async function findAll() {
    const result = await pool.query('SELECT * FROM epa');
    return result.rows;
}

// Busca un registro de epa por su ID
export async function findById(id) {
    const result = await pool.query('SELECT * FROM epa WHERE id_epa = $1', [id]);
    return result.rows[0];
}

// Crea un nuevo registro en la tabla epa
export async function create({ nombre_epa, descripcion }) {
    const result = await pool.query(
        'INSERT INTO epa (nombre_epa, descripcion) VALUES ($1, $2) RETURNING *',
        [nombre_epa, descripcion]
    );
    return result.rows[0];
}

// Actualiza un registro existente de epa por su ID
export async function update(id, { nombre_epa, descripcion }) {
    const result = await pool.query(
        'UPDATE epa SET nombre_epa = $1, descripcion = $2 WHERE id_epa = $3 RETURNING *',
        [nombre_epa, descripcion, id]
    );
    return result.rows[0];
}

// Elimina un registro de epa por su ID
export async function deleteEpa(id) {
    await pool.query('DELETE FROM epa WHERE id_epa = $1', [id]);
}