const services = require('../services/restaurantService')

// Create a new restaurant
exports.createRestaurant = async (req, res) => {
    try {
      const restaurant = await restaurantService.createRestaurant(req.body);
      res.status(201).json({ success: true, restaurant });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
  
  // Get all restaurants
  exports.getAllRestaurants = async (req, res) => {
    try {
      const restaurants = await restaurantService.getAllRestaurants();
      res.status(200).json({ success: true, restaurants });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  // Get a restaurant by ID
  exports.getRestaurantById = async (req, res) => {
    try {
      const restaurant = await restaurantService.getRestaurantById(req.params.id);
      res.status(200).json({ success: true, restaurant });
    } catch (error) {
      res.status(404).json({ success: false, message: error.message });
    }
  };
  
  // Update a restaurant
  exports.updateRestaurant = async (req, res) => {
    try {
      const restaurant = await restaurantService.updateRestaurant(req.params.id, req.body);
      res.status(200).json({ success: true, restaurant });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
  
  // Delete a restaurant
  exports.deleteRestaurant = async (req, res) => {
    try {
      await restaurantService.deleteRestaurant(req.params.id);
      res.status(200).json({ success: true, message: 'Restaurant deleted successfully' });
    } catch (error) {
      res.status(404).json({ success: false, message: error.message });
    }
  };