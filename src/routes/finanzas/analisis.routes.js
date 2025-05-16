import { Router } from 'express';
import { calcularGanancias } from '../../controllers/finanzas/analisis.controller.js';

const router = Router();
router.get('/ganancias', calcularGanancias);

export default router;