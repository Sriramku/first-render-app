const express = require("express");
const app = express();
const { Pool } = require('pg');

const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});


// Route
app.get("/", (req, res) => {
  res.send("Hello Express with Yarn! 🚀");
});

app.get('/users', async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
