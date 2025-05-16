import pool from'../../config/db.js';

const CultivoModel = {
  async getAll() {
    const res = await pool.query('SELECT * FROM cultivos');
    return res.rows;
  },
  async getById(id) {
    const res = await pool.query('SELECT * FROM cultivos WHERE id_cultivo = $1', [id]);
    return res.rows[0];
  },
  async create(data) {
    const res = await pool.query(
      'INSERT INTO cultivos (id_insumo) VALUES ($1) RETURNING *',
      [data.id_insumo]
    );
    return res.rows[0];
  },
  async update(id, data) {
    const res = await pool.query(
      'UPDATE cultivos SET id_insumo = $1 WHERE id_cultivo = $2 RETURNING *',
      [data.id_insumo, id]
    );
    return res.rows[0];
  },
  async delete(id) {
    await pool.query('DELETE FROM cultivos WHERE id_cultivo = $1', [id]);
  },
};

export default CultivoModel;