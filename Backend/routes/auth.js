const express = require('express');
const router = express.Router();

const { registerUser } = require('../controllers/authController');
const { loginUser } = require('../controllers/appController');


// Signup route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

module.exports = router;