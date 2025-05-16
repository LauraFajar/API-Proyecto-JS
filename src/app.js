import express from 'express';
import almacenRoutes from './routes/finanzas/almacen.routes.js';
import categoriaRoutes from './routes/finanzas/categoria.routes.js';
import ingresoRoutes from './routes/finanzas/ingreso.routes.js';
import insumoRoutes from './routes/finanzas/insumo.routes.js';
import salidaRoutes from './routes/finanzas/salida.routes.js';
import utilizaRoutes from './routes/finanzas/utiliza.routes.js';
import analisisRoutes from './routes/finanzas/analisis.routes.js';
import exportarRoutes from './routes/finanzas/exportar.routes.js';
import reportesRoutes from './routes/finanzas/reportes.routes.js';

import realizaRoutes from './routes/usuarios/realiza.routes.js';
import rolRoutes from './routes/usuarios/rol.routes.js';
import tiporolRoutes from './routes/usuarios/tiporol.routes.js';
import usuarioRoutes from './routes/usuarios/usuario.routes.js';

const app = express();
app.use(express.json());

app.use('/api/finanzas/almacen', almacenRoutes);
app.use('/api/finanzas/categoria', categoriaRoutes);
app.use('/api/finanzas/ingreso', ingresoRoutes);
app.use('/api/finanzas/insumo', insumoRoutes);
app.use('/api/finanzas/salida', salidaRoutes);
app.use('/api/finanzas/utiliza', utilizaRoutes);
app.use('/api/finanzas/analisis', analisisRoutes);
app.use('/api/finanzas/exportar', exportarRoutes);
app.use('/api/finanzas/reportes', reportesRoutes);

app.use('/api/usuarios/realiza', realizaRoutes);
app.use('/api/usuarios/rol', rolRoutes);
app.use('/api/usuarios/tiporol', tiporolRoutes);
app.use('/api/usuarios/usuario', usuarioRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});