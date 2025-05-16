import express from 'express';
import sensorController from '../../controllers/iot/sensor.controller.js';
import alertaController from '../../controllers/iot/alerta.controller.js';
import auth from '../../middlewares/authMiddleware.js'; // <-- Agrega esta línea

const router = express.Router();

// Sensores
router.get('/sensores', auth, sensorController.getAll);
router.get('/sensores/:id', auth, sensorController.getById);
router.post('/sensores', auth, sensorController.create);
router.put('/sensores/:id', auth, sensorController.update);
router.delete('/sensores/:id', auth, sensorController.delete);

// Alertas
router.get('/alertas', auth, alertaController.getAll);
router.get('/alertas/:id', auth, alertaController.getById);
router.post('/alertas', auth, alertaController.create);
router.put('/alertas/:id', auth, alertaController.update);
router.delete('/alertas/:id', auth, alertaController.delete);

export default router;
