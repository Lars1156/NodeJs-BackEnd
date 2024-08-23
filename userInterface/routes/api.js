const express = require('express');
const userController = require('../controller/userController');
const { protect ,admin} = require('../middlewre/auth');
const router = express.Router();

router.post('/registerUser',userController.registerUser);
router.post('/loginUser', userController.loginUser);
router.get('/:id', protect, userController.getUserById);
router.put('/profile', protect, userController.updateUserProfile);

// Menu routes

module.exports = router;
