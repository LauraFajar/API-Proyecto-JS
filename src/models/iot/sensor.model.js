import pool from '../../config/db.js';

const SensorModel = {
  async getAll() {
    const res = await pool.query('SELECT * FROM sensores');
    return res.rows;
  },
  async getById(id) {
    const res = await pool.query('SELECT * FROM sensores WHERE id_sensor = $1', [id]);
    return res.rows[0];
  },
  async create(data) {
    const res = await pool.query(
      'INSERT INTO sensores (tipo_sensor, id_sublote, estado) VALUES ($1, $2, $3) RETURNING *',
      [data.tipo_sensor, data.id_sublote, data.estado]
    );
    return res.rows[0];
  },
  async update(id, data) {
    const res = await pool.query(
      'UPDATE sensores SET tipo_sensor = $1, id_sublote = $2, estado = $3 WHERE id_sensor = $4 RETURNING *',
      [data.tipo_sensor, data.id_sublote, data.estado, id]
    );
    return res.rows[0];
  },
  async delete(id) {
    await pool.query('DELETE FROM sensores WHERE id_sensor = $1', [id]);
  },
};

export default SensorModel;