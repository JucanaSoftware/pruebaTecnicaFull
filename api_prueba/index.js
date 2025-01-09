const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();
const port = 3000;

app.use(express.json()); 

// Rutas
app.use('/api', usuarioRoutes);

// Iniciar servidor
app.listen(port);
