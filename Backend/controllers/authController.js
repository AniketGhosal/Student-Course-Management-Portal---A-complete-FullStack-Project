const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  try {
    // 🔍 Log incoming request data
    console.log("Register request received:", req.body);

    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
  `INSERT INTO users (name, email, password)
   VALUES ($1, $2, $3) RETURNING *`,
  [name, email, hashedPassword]
);

    // 🔍 Log database response
    console.log("User inserted:", result.rows[0]);

    res.status(201).json({ user: result.rows[0] });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: 'Registration failed' });
  }
};