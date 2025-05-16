import { Router } from 'express';
import * as rolController from '../../controllers/usuarios/rol.controller.js';

const router = Router();

router.get('/listar', rolController.getAll);
router.get('/buscar/:id', rolController.getById);
router.post('/crear', rolController.create);
router.put('/actualizar/:id', rolController.update);
router.delete('/eliminar/:id', rolController.deleteRol);

export default router;