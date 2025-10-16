const express = require("express"); // Express app
const router = express.Router();    // Router logic
const jwt = require('jsonwebtoken'); // Enable JSON Web Tokens

// Import controllers
const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");

// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    console.log('Auth Header Required but NOT PRESENT!');
    return res.sendStatus(401);
  }

  const headers = authHeader.split(' ');
  if (headers.length < 2) {
    console.log('Not enough tokens in Auth Header');
    return res.sendStatus(501);
  }

  const token = headers[1];
  if (!token) {
    console.log('Null Bearer Token');
    return res.sendStatus(401);
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
    if (err) {
      console.log('Token Validation Error!');
      return res.status(401).json('Token Validation Error!');
    }
    req.auth = verified; // attach decoded user info
    next(); // Only continues if verification succeeds
  });
}

// Define routes

// Trips collection routes
router
  .route("/trips")
  .get(tripsController.tripsList)                       // Public - anyone can read trips
  .post(authenticateJWT, tripsController.tripsAddTrip); // Protected - must be logged in

// Single trip routes
router
  .route("/trips/:tripCode")
  .get(tripsController.tripsFindByCode)                 // Public - anyone can read one trip
  .put(authenticateJWT, tripsController.tripsUpdateTrip); // Protected - must be logged in

// User registration
router
  .route("/register")
  .post(authController.register);

// User login
router
  .route("/login")
  .post(authController.login);

module.exports = router;