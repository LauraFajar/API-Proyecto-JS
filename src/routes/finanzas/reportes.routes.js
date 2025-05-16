import { Router } from 'express';
import { gastosPorCultivo, ingresosPorCultivo } from '../../controllers/finanzas/reportes.controller.js';

const router = Router();
router.get('/gastosCultivo', gastosPorCultivo);
router.get('/ingresosCultivo', ingresosPorCultivo);

export default router;