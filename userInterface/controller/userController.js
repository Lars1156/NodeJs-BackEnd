const userService = require('../services/userServices');

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    console.log("User Details" , req.body);
    
    const { user, token } = await userService.registerUser(req.body);
    res.status(201).json({ success: true, user, token });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await userService.loginUser(email, password);
    res.status(200).json({ success: true, user, token });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  try {
    const user = await userService.updateUserProfile(req.user.id, req.body);
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
