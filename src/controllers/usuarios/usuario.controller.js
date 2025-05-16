import * as UsuarioModel from '../../models/usuarios/usuario.model.js';

export async function getAll(req, res) {
    const usuarios = await UsuarioModel.findAll();
    res.json(usuarios);
}

export async function getById(req, res) {
    const usuario = await UsuarioModel.findById(req.params.id);
    if (!usuario) return res.status(404).json({ message: 'No encontrado' });
    res.json(usuario);
}

export async function create(req, res) {
    const nuevo = await UsuarioModel.create(req.body);
    res.status(201).json(nuevo);
}

export async function update(req, res) {
    const actualizado = await UsuarioModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

export async function deleteUsuario(req, res) {
    await UsuarioModel.deleteUsuario(req.params.id);
    res.json({ message: 'Eliminado' });
}

export async function solicitarRecuperacion(req, res) {
    const { email } = req.body;
    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Correo no registrado' });
    }
    const user = result.rows[0];
    const token = jwt.sign({ id_usuarios: user.id_usuarios }, "palabraclave", { expiresIn: '15m' });
    res.json({ message: 'Código enviado al correo', token });
}

export async function cambiarPassword(req, res) {
    const { token, nuevaPassword } = req.body;
    try {
        const decoded = jwt.verify(token, "palabraclave");
        await pool.query('UPDATE usuarios SET password = $1 WHERE id_usuarios = $2', [nuevaPassword, decoded.id_usuarios]);
        res.json({ message: 'Contraseña actualizada correctamente' });
    } catch (error) {
        res.status(400).json({ message: 'Token inválido o expirado' });
    }
}