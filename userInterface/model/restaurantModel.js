const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a restaurant name'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'Please provide a restaurant address'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide a contact number'],
  },
  email: {
    type: String,
    required: [true, 'Please provide a restaurant email'],
    unique: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please provide a valid email address'],
  },
//   menu: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'MenuItem',
//     },
//   ],
  status: {
    type: String,
    enum: ['open', 'closed'],
    default: 'open',
  },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
