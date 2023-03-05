const express = require('express');
const { userSignup, userLogin, deleteUser } = require('../controllers/user');
const router = express.Router();
const checkAuth = require('../middleware/check_auth');

const User = require('../models/user');

// Routes

router.post('/signup', userSignup);

router.post('/login', userLogin);

router.delete('/:userID', checkAuth, deleteUser);

module.exports = router;