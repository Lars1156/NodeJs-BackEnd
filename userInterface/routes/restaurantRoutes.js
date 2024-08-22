const express = require('express');
const restaurantController = require('../controller/restaurantController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

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
