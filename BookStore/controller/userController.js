const User = require('../modules/userModule');
const jwt = require('jsonwebtoken');
exports.register = async (req, res) => {
    const { username, password } = req.body;
    console.log("**** User Login deatils" ,req.body);
    try {
      const user = new User({ username, password });
      await user.save();
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
  
      res.status(201).json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  exports.login = async(res,req)=>{
    exports.login = async (req, res) => {
        const { username, password } = req.body;
      
        try {
          const user = await User.findOne({ username });
          if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
          }
      
          const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
          });
      
          res.status(200).json({ token });
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      };
  }