const express = require('express');
const userController = require('../controller/userController');
const menuController = require('../controller/menuController');
const { protect ,admin} = require('../middlewre/auth');
const router = express.Router();

router.post('/registerUser',userController.registerUser);
router.post('/loginUser', userController.loginUser);
router.get('/:id', protect, userController.getUserById);
router.put('/profile', protect, userController.updateUserProfile);

// Menu routes

router.post('/', protect , menuController.createMenuItem);
router.get('/restaurant/:restaurantId', menuController.getMenuByRestaurant);
router.get('/:id', menuController.getMenuItemById);
router.put('/:id', protect, menuController.updateMenuItem);
router.delete('/:id', protect, menuController.deleteMenuItem);
router.put('/:id/approve', protect, admin, menuController.approveMenuItem);

module.exports = router;
