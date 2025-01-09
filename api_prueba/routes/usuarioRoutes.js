const express = require('express');
const router = express.Router();
const { getUsuarios } = require('../clases/usuario');

router.get('/data', async (req, res) => {
  try {
    const usuarios = await getUsuarios();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los usuarios', motivo: err.message });
  }
});

module.exports = router;