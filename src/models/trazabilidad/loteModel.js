import pool from'../../config/db.js';

const LoteModel = {
  async getAll() {
    const res = await pool.query('SELECT * FROM lotes');
    return res.rows;
  },
  async getById(id) {
    const res = await pool.query('SELECT * FROM lotes WHERE id_lote = $1', [id]);
    return res.rows[0];
  },
  async create(data) {
    const res = await pool.query(
      'INSERT INTO lotes (descripcion) VALUES ($1) RETURNING *',
      [data.descripcion]
    );
    return res.rows[0];
  },
  async update(id, data) {
    const res = await pool.query(
      'UPDATE lotes SET descripcion = $1 WHERE id_lote = $2 RETURNING *',
      [data.descripcion, id]
    );
    return res.rows[0];
  },
  async delete(id) {
    await pool.query('DELETE FROM lotes WHERE id_lote = $1', [id]);
  },
};

export default LoteModel;