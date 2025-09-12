// require('dotenv').config();
// const { Pool } = require('pg');

// console.log("Loaded DB config:", {
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });



// module.exports = pool;

// console.log("Current working directory:", process.cwd());

// require('dotenv').config(); 




// require('dotenv').config({ path: __dirname + '/.env' });
// const { Pool } = require('pg');

// console.log("Loaded DB config:", {
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// module.exports = Pool;


require('dotenv').config({ path: __dirname + '/.env' });
const { Pool } = require('pg');

// Confirm environment variables
console.log("Loaded DB config:", {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Create a pool instance
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Optional: test connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('PostgreSQL connection failed:', err.message);
  } else {
    console.log('PostgreSQL connected at:', res.rows[0].now);
  }
});

module.exports = pool;