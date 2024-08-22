const Restaurant = require('../model/restaurantModel');

// create new resraurant
exports.createRestaurant = async (restaurantData) =>{
 const{name, address , email,phone } = restaurantData;
 const existingRestaurant = await Restaurant.findOne({email});
 if(existingRestaurant){
    throw new Error('restaurant is already exists');
 }
//  create new reastornent

 const restaurant = await Restaurant.create({
    name,
    address,
    phone,
    email,
  });

  return restaurant;
}
// Get all restaurants
exports.getAllRestaurants = async () => {
    return await Restaurant.find();
  };
  
  // Get a restaurant by ID
  exports.getRestaurantById = async (restaurantId) => {
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      throw new Error('Restaurant not found.');
    }
    return restaurant;
  };
  exports.updateRestaurant = async (restaurantId, updateData) => {
    const restaurant = await Restaurant.findByIdAndUpdate(restaurantId, updateData, {
      new: true,
      runValidators: true,
    });
    if (!restaurant) {
      throw new Error('Restaurant not found.');
    }
    return restaurant;
  };
  
  // Delete a restaurant
  exports.deleteRestaurant = async (restaurantId) => {
    const restaurant = await Restaurant.findByIdAndDelete(restaurantId);
    if (!restaurant) {
      throw new Error('Restaurant not found.');
    }
    return restaurant;
  };  