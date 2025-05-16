import { Router } from 'express';
import * as categoriaController from '../../controllers/finanzas/categoria.controller.js';

const router = Router();

router.get('/listar', categoriaController.getAll);
router.get('/buscar/:id', categoriaController.getById);
router.post('/crear', categoriaController.create);
router.put('/actualizar/:id', categoriaController.update);
router.delete('/eliminar/:id', categoriaController.deleteCategoria);

export default router;