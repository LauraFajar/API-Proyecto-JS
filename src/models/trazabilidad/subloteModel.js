import pool from'../../config/db.js';

const SubloteModel = {
  async getAll() {
    const res = await pool.query('SELECT * FROM sublotes');
    return res.rows;
  },
  async getById(id) {
    const res = await pool.query('SELECT * FROM sublotes WHERE id_sublote = $1', [id]);
    return res.rows[0];
  },
  async create(data) {
    const res = await pool.query(
      'INSERT INTO sublotes (id_lote, descripcion) VALUES ($1, $2) RETURNING *',
      [data.id_lote, data.descripcion]
    );
    return res.rows[0];
  },
  async update(id, data) {
    const res = await pool.query(
      'UPDATE sublotes SET id_lote = $1, descripcion = $2 WHERE id_sublote = $3 RETURNING *',
      [data.id_lote, data.descripcion, id]
    );
    return res.rows[0];
  },
  async delete(id) {
    await pool.query('DELETE FROM sublotes WHERE id_sublote = $1', [id]);
  },
};

export default SubloteModel;