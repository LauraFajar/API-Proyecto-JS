import pool from'../../config/db.js';

const ActividadModel = {
  async getAll() {
    const res = await pool.query('SELECT * FROM actividades');
    return res.rows;
  },
  async getById(id) {
    const res = await pool.query('SELECT * FROM actividades WHERE id_actividad = $1', [id]);
    return res.rows[0];
  },
  async create(data) {
    const res = await pool.query(
      'INSERT INTO actividades (id_cultivo) VALUES ($1) RETURNING *',
      [data.id_cultivo]
    );
    return res.rows[0];
  },
  async update(id, data) {
    const res = await pool.query(
      'UPDATE actividades SET id_cultivo = $1 WHERE id_actividad = $2 RETURNING *',
      [data.id_cultivo, id]
    );
    return res.rows[0];
  },
  async delete(id) {
    await pool.query('DELETE FROM actividades WHERE id_actividad = $1', [id]);
  },
};

export default ActividadModel;