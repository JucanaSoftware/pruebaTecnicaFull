const { Pool } = require('pg');

//cambiamos user y password y nombre de la base de datos segun el entorno
const pool = new Pool({
  user: 'postgres',      
  host: 'localhost',      
  database: 'db_node', 
  password: '1234', 
  port: 5432,              
});

module.exports = pool;