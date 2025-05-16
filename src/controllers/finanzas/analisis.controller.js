import pool from '../../config/db.js';

export async function calcularGanancias(req, res) {
    const { cultivo, desde, hasta } = req.query;
    const ingresos = await pool.query(
        `SELECT COALESCE(SUM(monto),0) as total FROM ingreso WHERE cultivo = $1 AND fecha_ingreso BETWEEN $2 AND $3`,
        [cultivo, desde, hasta]
    );
    const egresos = await pool.query(
        `SELECT COALESCE(SUM(cantidad),0) as total FROM salida WHERE cultivo = $1 AND fecha_salida BETWEEN $2 AND $3`,
        [cultivo, desde, hasta]
    );
    const ganancia = ingresos.rows[0].total - egresos.rows[0].total;
    res.json({ cultivo, desde, hasta, ingresos: ingresos.rows[0].total, egresos: egresos.rows[0].total, ganancia });
}