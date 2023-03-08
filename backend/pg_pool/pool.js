const  Pool  = require('pg').Pool;
 
const pool = new Pool({
  host: 'postgres',
  user: 'root',
  password: 'mcptg14a121',
  database: 'animales',
  port: 5432,
})

module.exports = pool


