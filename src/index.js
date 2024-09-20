const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Configuración de CORS para permitir solicitudes desde cualquier origen
app.use(cors());
app.use(express.json());

// Montar las rutas bajo el prefijo '/api/auth'
app.use('/api/auth', authRoutes);

// Establecer el puerto del servidor
const PORT = 4000; // Cambia esto al puerto 4000
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
