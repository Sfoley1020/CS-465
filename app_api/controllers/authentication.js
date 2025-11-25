const mongoose = require('mongoose');
const User = require('../models/user');
const passport = require('passport');

// REGISTER a new user
// (Used only if you need to create admin user)
const register = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ "message": "All fields required" });
  }

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    admin: req.body.admin || false   // Admin must be set manually in MongoDB
  });

  user.setPassword(req.body.password);

  try {
    const savedUser = await user.save();
    const token = savedUser.generateJWT();
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(400).json(err);
  }
};

// LOGIN (Admin Only)
const login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ message: 'All fields required' });
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(404).json(err);
    }

    if (!user) {
      return res.status(401).json(info);
    }

    // ADMIN-ONLY LOGIN CHECK
    if (user.admin !== true) {
      return res
        .status(403)
        .json({ message: "Access denied. Admins only." });
    }

    // Login success → issue JWT
    const token = user.generateJWT();
    return res.status(200).json({ token });

  })(req, res);
};

module.exports = {
  register,
  login
};