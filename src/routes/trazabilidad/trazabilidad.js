import express from 'express';
import auth from '../../middlewares/authMiddleware.js';
import actividadController from '../../controllers/trazabilidad/actividadController.js';
import loteController from '../../controllers/trazabilidad/loteController.js';
// Agrega aquí los demás controladores: cultivoController, subloteController, tieneController

const router = express.Router();

// Actividades
router.get('/actividades', auth, actividadController.getAll);
router.get('/actividades/:id', auth, actividadController.getById);
router.post('/actividades', auth, actividadController.create);
router.put('/actividades/:id', auth, actividadController.update);
router.delete('/actividades/:id', auth, actividadController.delete);

// Lotes
router.get('/lotes', auth, loteController.getAll);
router.get('/lotes/:id', auth, loteController.getById);
router.post('/lotes', auth, loteController.create);
router.put('/lotes/:id', auth, loteController.update);
router.delete('/lotes/:id', auth, loteController.delete);

// Repite para cultivos, sublotes y tiene...

export default router;