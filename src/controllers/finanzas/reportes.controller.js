import pool from '../../config/db.js';

export async function gastosPorCultivo(req, res) {
    const result = await pool.query(`
        SELECT cultivo, SUM(cantidad) as total_gastos
        FROM salida
        GROUP BY cultivo
    `);
    res.json(result.rows);
}

export async function ingresosPorCultivo(req, res) {
    const result = await pool.query(`
        SELECT cultivo, SUM(monto) as total_ingresos
        FROM ingreso
        GROUP BY cultivo
    `);
    res.json(result.rows);
}