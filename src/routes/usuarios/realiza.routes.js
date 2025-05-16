import { Router } from 'express';
import realizaController from '../../controllers/usuarios/realiza.controller.js';

const router = Router();

router.get('/listar', realizaController.getAll);
router.get('/buscar/:id', realizaController.getById);
router.post('/crear', realizaController.create);
router.put('/actualizar/:id', realizaController.update);
router.delete('/eliminar/:id', realizaController.deleteRealiza);

export default router;