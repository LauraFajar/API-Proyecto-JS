import jwt from 'jsonwebtoken';
import pool from '../config/db.js';

export const validarUsuario = async (req, res) => {
    try {
        const { login, password } = req.body;
        const result = await pool.query(
            `SELECT u.id_usuarios, u.nombres, u.email, u.tipo_documento, u.numero_documento, r.nombre_rol
             FROM usuarios u
             JOIN rol r ON u.id_rol = r.id_rol
             WHERE u.numero_documento = $1 AND u.password = $2`,
            [login, password]
        );
        if (result.rows.length > 0) {
            const user = result.rows[0];
            const token = jwt.sign(
                {
                    id_usuarios: user.id_usuarios,
                    nombres: user.nombres,
                    numero_documento: user.numero_documento,
                    rol: user.nombre_rol, 
                },
                "palabraclave",
                { expiresIn: '8h' }
            );
            res.status(200).json({ usuario: user, token });
        } else {
            res.status(404).json({ message: 'Usuario no autorizado', status: 404 });
        }
    } catch (error) {
        console.log("Error en authentication.js: " + error);
        res.status(500).json({ error: 'Error al validar usuario' });
    }
};

export const validarToken = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(403).json({ message: 'Token es requerido' });
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(403).json({ message: 'Token es requerido' });
        }
        jwt.verify(token, "palabraclave", (error, decoded) => {
            if (error) {
                return res.status(403).json({
                    status: 403,
                    message: 'Token inválido o expirado',
                });
            }
            req.user = decoded;
            next();
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Error en el servidor: ' + error.message,
        });
    }
}