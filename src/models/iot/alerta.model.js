import pool from '../../config/db.js';

const AlertaModel = {
  async getAll() {
    const res = await pool.query('SELECT * FROM alertas');
    return res.rows;
  },
  async getById(id) {
    const res = await pool.query('SELECT * FROM alertas WHERE id_alerta = $1', [id]);
    return res.rows[0];
  },
  async create(data) {
    const res = await pool.query(
      'INSERT INTO alertas (id_sensor) VALUES ($1) RETURNING *',
      [data.id_sensor]
    );
    return res.rows[0];
  },
  async update(id, data) {
    const res = await pool.query(
      'UPDATE alertas SET id_sensor = $1 WHERE id_alerta = $2 RETURNING *',
      [data.id_sensor, id]
    );
    return res.rows[0];
  },
  async delete(id) {
    await pool.query('DELETE FROM alertas WHERE id_alerta = $1', [id]);
  },
};

export default AlertaModel;