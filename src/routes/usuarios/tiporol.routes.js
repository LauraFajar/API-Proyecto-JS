import { Router } from 'express';
import * as tiporolController from '../../controllers/usuarios/tiporol.controller.js';

const router = Router();

router.get('/listar', tiporolController.getAll);
router.get('/buscar/:id', tiporolController.getById);
router.post('/crear', tiporolController.create);
router.put('/actualizar/:id', tiporolController.update);
router.delete('/eliminar/:id', tiporolController.deleteTipoRol);

export default router;