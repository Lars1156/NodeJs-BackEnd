const jwt = require('jsonwebtoken');
const User = require('../modules/userModule');

exports.protect = async (req, res, next) => {
    let token;
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
  
    if (!token) {
      return res.status(401).json({ error: 'Not authorized, no token' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ error: 'Not authorized, token failed' });
    }
  };