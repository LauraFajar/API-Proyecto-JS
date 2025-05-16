import pool from'../../config/db.js';

const TieneModel = {
  async getAll() {
    const res = await pool.query('SELECT * FROM tiene');
    return res.rows;
  },
  async getById(id) {
    const res = await pool.query('SELECT * FROM tiene WHERE id_tiene = $1', [id]);
    return res.rows[0];
  },
  async create(data) {
    const res = await pool.query(
      'INSERT INTO tiene (id_lote, id_cultivo) VALUES ($1, $2) RETURNING *',
      [data.id_lote, data.id_cultivo]
    );
    return res.rows[0];
  },
  async update(id, data) {
    const res = await pool.query(
      'UPDATE tiene SET id_lote = $1, id_cultivo = $2 WHERE id_tiene = $3 RETURNING *',
      [data.id_lote, data.id_cultivo, id]
    );
    return res.rows[0];
  },
  async delete(id) {
    await pool.query('DELETE FROM tiene WHERE id_tiene = $1', [id]);
  },
};

module.exports = TieneModel;