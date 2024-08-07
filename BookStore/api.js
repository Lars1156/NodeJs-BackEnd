const express = require('express');
const router = express.Router();

const userController = require('./controller/userController');

// User Routes

router.post('/rgister ' , userController.register);
router.post('login', userController.login);