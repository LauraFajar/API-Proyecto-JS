import { Router } from 'express';
import { exportarGastosExcel, exportarGastosPDF } from '../../controllers/finanzas/exportar.controller.js';

const router = Router();
router.get('/gastosExcel', exportarGastosExcel);
router.get('/gastosPdf', exportarGastosPDF);

export default router;