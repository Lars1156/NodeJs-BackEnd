const express = require('express');
const restaurantController = require('../controller/restaurantController');
const { protect, admin } = require('../middlewre/auth');

const router = express.Router();

router.post('/createReast' , protect, admin ,restaurantController.createRestaurant);
router.get('/getAllrest', protect, admin, restaurantController.getAllRestaurants);


module.exports = router;
