const Menu = require('../model/menuModel');
exports.createMenuItem = async (menuData) => {
    const { restaurant, name, description, price, category, isAvailable } = menuData;
  
    const menuItem = await Menu.create({
      restaurant,
      name,
      description,
      price,
      category,
      isAvailable,
    });
  
    return menuItem;
  };

  exports.getMenuByRestaurant = async (restaurantId) => {
    return await Menu.find({ restaurant: restaurantId });
  };

  exports.getMenuItemById = async (menuItemId) => {
    const menuItem = await Menu.findById(menuItemId);
    if (!menuItem) {
      throw new Error('Menu item not found.');
    }
    return menuItem;
  };

  exports.updateMenuItem = async (menuItemId, updateData) => {
    const menuItem = await Menu.findByIdAndUpdate(menuItemId, updateData, {
      new: true,
      runValidators: true,
    });
    if (!menuItem) {
      throw new Error('Menu item not found.');
    }
    return menuItem;
  };
  
  exports.deleteMenuItem = async (menuItemId) => {
    const menuItem = await Menu.findByIdAndDelete(menuItemId);
    if (!menuItem) {
      throw new Error('Menu item not found.');
    }
    return menuItem;
  };

  exports.approveMenuItem = async (menuItemId, status) => {
    const menuItem = await Menu.findById(menuItemId);
    if (!menuItem) {
      throw new Error('Menu item not found.');
    }
  
    if (!['approved', 'rejected'].includes(status)) {
      throw new Error('Invalid status. Use "approved" or "rejected".');
    }
  
    menuItem.status = status;
    await menuItem.save();
    return menuItem;
  };