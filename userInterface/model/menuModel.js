const mongoose  = require('mongoose');

const menuSchma = new mongoose.Schema({
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
      },
      name: {
        type: String,
        required: [true, 'Please provide a menu item name'],
        trim: true,
      },
      description: {
        type: String,
        trim: true,
      },
      price: {
        type: Number,
        required: [true, 'Please provide a price for the menu item'],
      },
      category: {
        type: String,
        required: [true, 'Please provide a category for the menu item'],
      },
      isAvailable: {
        type: Boolean,
        default: true,
      },
      status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
});
module.exports = mongoose.model('Menu', menuSchma);