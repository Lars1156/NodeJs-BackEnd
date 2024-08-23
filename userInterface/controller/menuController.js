const menuService = require('../services/menuService');

exports.createMenuItem = async (req, res) => {
    try {
      const menuItem = await menuService.createMenuItem(req.body);
      res.status(201).json({ success: true, menuItem });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  exports.getMenuByRestaurant = async (req, res) => {
    try {
      const menuItems = await menuService.getMenuByRestaurant(req.params.restaurantId);
      res.status(200).json({ success: true, menuItems });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  exports.getMenuItemById = async (req, res) => {
    try {
      const menuItem = await menuService.getMenuItemById(req.params.id);
      res.status(200).json({ success: true, menuItem });
    } catch (error) {
      res.status(404).json({ success: false, message: error.message });
    }
  };

  exports.updateMenuItem = async (req, res) => {
    try {
      const menuItem = await menuService.updateMenuItem(req.params.id, req.body);
      res.status(200).json({ success: true, menuItem });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
  

  exports.deleteMenuItem = async (req, res) => {
    try {
      await menuService.deleteMenuItem(req.params.id);
      res.status(200).json({ success: true, message: 'Menu item deleted successfully' });
    } catch (error) {
      res.status(404).json({ success: false, message: error.message });
    }
  };

  exports.approveMenuItem = async (req, res) => {
    try {
      const { status } = req.body;
      const menuItem = await menuService.approveMenuItem(req.params.id, status);
      res.status(200).json({ success: true, menuItem });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };