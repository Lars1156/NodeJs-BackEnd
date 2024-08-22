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