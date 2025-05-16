import { Router } from 'express';
import * as utilizaController from '../../controllers/finanzas/utiliza.controller.js';

const router = Router();

router.get('/listar', utilizaController.getAll);
router.get('/buscar/:id', utilizaController.getById);
router.post('/crear', utilizaController.create);
router.put('/actualizar/:id', utilizaController.update);
router.delete('/eliminar/:id', utilizaController.deleteUtiliza);

router.get('/actividadesInsumos', utilizaController.getActividadesInsumos);

export default router;