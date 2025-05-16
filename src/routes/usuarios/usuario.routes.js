import { Router } from 'express';
import * as usuarioController from '../../controllers/usuarios/usuario.controller.js';
import { validarUsuario, validarToken } from '../../middlewares/authentication.js';
import { authorizeRoles } from '../../middlewares/authorize.js';

const router = Router();

router.get('/listar', usuarioController.getAll);
router.get('/buscar/:id', usuarioController.getById);
router.post('/crear', validarToken, authorizeRoles('Instructor'), usuarioController.create);
router.put('/actualizar/:id', usuarioController.update);
router.delete('/eliminar/:id', usuarioController.deleteUsuario);
router.post('/recuperar', usuarioController.solicitarRecuperacion);
router.post('/cambiarPassword', usuarioController.cambiarPassword);

router.post('/validar', validarUsuario)

export default router;