const dbconfig = require('../config/dbconfig');

//Funcion para traer la informacion de la base de datos

async function getUsuarios() {
    const SelectUsuarios = 'SELECT id, nombre, correo, edad FROM public.usuarios;';
    const resultadoSelect = await dbconfig.query(SelectUsuarios);
    return resultadoSelect.rows;
  }
  
  module.exports = {
    getUsuarios,
  };
  