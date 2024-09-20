// src/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');

const register = async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    // Validar que el correo electrónico no esté en uso
    const existingUser = await Usuario.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo electrónico ya está en uso.' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario
    const newUser = await Usuario.create({
      nombre,
      email,
      password: hashedPassword,
    });

    // Generar un token JWT
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Devolver el token JWT
    return res.status(201).json({ token });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    return res.status(500).json({ message: 'Error al registrar usuario.' });
  }
};

module.exports = { register };
