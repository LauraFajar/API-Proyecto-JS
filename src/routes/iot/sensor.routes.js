import { Router } from 'express';
import * as sensorController from '../../controllers/iot/sensor.controller.js';

const router = Router();

router.get('/listar', sensorController.getAll);
router.get('/buscar/:id', sensorController.getById);
router.post('/crear', sensorController.create);
router.put('/actualizar/:id', sensorController.update);
router.delete('/eliminar/:id', sensorController.deleteSensor);

export default router;
