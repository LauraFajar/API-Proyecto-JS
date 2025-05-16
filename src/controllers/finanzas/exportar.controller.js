import ExcelJS from 'exceljs';
import PDFDocument from 'pdfkit';
import pool from '../../config/db.js';

export async function exportarGastosExcel(req, res) {
    const result = await pool.query('SELECT * FROM salidas');
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Gastos');
    worksheet.columns = [
        { header: 'ID', key: 'id_salida' },
        { header: 'Cultivo', key: 'cultivo' },
        { header: 'Cantidad', key: 'cantidad' },
    ];
    worksheet.addRows(result.rows);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=gastos.xlsx');
    await workbook.xlsx.write(res);
    res.end();
}

export async function exportarGastosPDF(req, res) {
    const result = await pool.query('SELECT * FROM salidas');
    const doc = new PDFDocument();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=gastos.pdf');
    doc.pipe(res);

    doc.fontSize(16).text('Reporte de Gastos', { align: 'center' });
    doc.moveDown();

    doc.fontSize(12).text('ID', 50, doc.y, { continued: true });
    doc.text('Cultivo', 100, doc.y, { continued: true });
    doc.text('Cantidad', 250, doc.y);
    doc.moveDown();

    result.rows.forEach(row => {
        doc.text(row.id_salida.toString(), 50, doc.y, { continued: true });
        doc.text(row.cultivo || '', 100, doc.y, { continued: true });
        doc.text(row.cantidad?.toString() || '', 250, doc.y);
        doc.moveDown();
    });

    doc.end();
}