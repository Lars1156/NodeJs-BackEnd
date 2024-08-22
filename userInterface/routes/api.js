const express = require('express');
const userController = require('../controller/userController');
const restaurantController = require('../controller/restaurantController')
const { protect ,admin } = require('../middlewre/auth');
const router = express.Router();

router.post('/registerUser',userController.registerUser);
router.post('/loginUser', userController.loginUser);
router.get('/:id', protect, userController.getUserById);
router.put('/profile', protect, userController.updateUserProfile);

// Create a restaurant (admin only)
router.post('/', protect, admin, restaurantController.createRestaurant);

// Get all restaurants
router.get('/', restaurantController.getAllRestaurants);

// Get a restaurant by ID
router.get('/:id', restaurantController.getRestaurantById);

// Update a restaurant (admin only)
router.put('/:id', protect, admin, restaurantController.updateRestaurant);

// Delete a restaurant (admin only)
router.delete('/:id', protect, admin, restaurantController.deleteRestaurant);

module.exports = router;
