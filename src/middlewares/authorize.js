export function authorizeRoles(...rolesPermitidos) {
    return (req, res, next) => {
        const user = req.user; 
        if (!user || !rolesPermitidos.includes(user.rol)) {
            return res.status(403).json({ message: 'Acceso denegado: rol no autorizado' });
        }
        next();
    };
}
