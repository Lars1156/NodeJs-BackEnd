const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// JWT Secret and Expiration Configuration
const JWT_SECRET = 'your_jwt_secret_key';
const JWT_EXPIRE = '1d';

// Register a new user
exports.registerUser = async (userData) => {
  const { name, email, password, phone } = userData;

  // Check if the email or phone number already exists
  const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
  if (existingUser) {
    throw new Error('User with this email or phone already exists.');
  }

  // Create a new user
  const user = await User.create({
    name,
    email,
    password,
    phone,
  });

  // Generate JWT token for the user
  const token = generateToken(user._id, user.role);

  return { user, token };
};

// Login user
exports.loginUser = async (email, password) => {
  // Check if user exists with the provided email
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new Error('Invalid email or password.');
  }

  // Check if the password matches
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    throw new Error('Invalid email or password.');
  }

  // Generate JWT token for the user
  const token = generateToken(user._id, user.role);

  return { user, token };
};

// Get user by ID
exports.getUserById = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found.');
  }
  return user;
};

// Update user profile
exports.updateUserProfile = async (userId, updateData) => {
  const user = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    throw new Error('User not found.');
  }
  return user;
};

// Utility to generate JWT
const generateToken = (userId, role) => {
  return jwt.sign({ id: userId, role }, JWT_SECRET, {
    expiresIn: JWT_EXPIRE,
  });
};
