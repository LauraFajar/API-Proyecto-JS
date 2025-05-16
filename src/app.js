import express from 'express';
import almacenRoutes from './routes/finanzas/almacen.routes.js';
import categoriaRoutes from './routes/finanzas/categoria.routes.js';
import ingresoRoutes from './routes/finanzas/ingreso.routes.js';
import insumoRoutes from './routes/finanzas/insumo.routes.js';
import salidaRoutes from './routes/finanzas/salida.routes.js';
import utilizaRoutes from './routes/finanzas/utiliza.routes.js';

import realizaRoutes from './routes/usuarios/realiza.routes.js';
import rolRoutes from './routes/usuarios/rol.routes.js';
import tiporolRoutes from './routes/usuarios/tiporol.routes.js';
import usuarioRoutes from './routes/usuarios/usuario.routes.js';


// Fitosanitario
import epaRoutes from './routes/fitosanitario/epa.routes.js';
import tratamientoRoutes from './routes/fitosanitario/tratamiento.routes.js';

import inventarioRoutes from './routes/inventario/inventario.routes.js'
import movimientoRoutes from './routes/inventario/movimiento.routes.js';

const app = express();
app.use(express.json());

app.use('/api/finanzas/almacen', almacenRoutes);
app.use('/api/finanzas/categoria', categoriaRoutes);
app.use('/api/finanzas/ingreso', ingresoRoutes);
app.use('/api/finanzas/insumo', insumoRoutes);
app.use('/api/finanzas/salida', salidaRoutes);
app.use('/api/finanzas/utiliza', utilizaRoutes);

app.use('/api/usuarios/realiza', realizaRoutes);
app.use('/api/usuarios/rol', rolRoutes);
app.use('/api/usuarios/tiporol', tiporolRoutes);
app.use('/api/usuarios/usuario', usuarioRoutes);

// Fitosanitario
app.use('/api/fitosanitario/epa', epaRoutes);
app.use('/api/fitosanitario/tratamiento', tratamientoRoutes);

app.use('/api/inventario/inventario',inventarioRoutes);
app.use('/api/inventario/movimiento', movimientoRoutes);


app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});