import jwt from 'jsonwebtoken';

const SECRET = 'palabraclave'; // Usa una variable de entorno en producción

export default function auth(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(403).json({ message: 'Token es requerido' });
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(403).json({ message: 'Token es requerido' });
  }
  jwt.verify(token, SECRET, (error, decoded) => {
    if (error) {
      return res.status(403).json({
        status: 403,
        message: 'Token inválido o expirado',
      });
    }
    req.user = decoded;
    next();
  });
}