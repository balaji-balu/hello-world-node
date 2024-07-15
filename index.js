
// index.js

const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// Set up the PostgreSQL client
const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'testdb',
  password: 'password',
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error querying the database');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
