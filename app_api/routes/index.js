const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');

// Controllers
const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");

// JWT authentication middleware
function authenticateJWT(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.sendStatus(401);
  }

  const parts = authHeader.split(' ');
  if (parts.length < 2) {
    return res.sendStatus(401);
  }

  const token = parts[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
    if (err) {
      return res.status(401).json('Token Validation Error!');
    }
    req.auth = verified;
    next();
  });
}

// Public → list trips
router
  .route("/trips")
  .get(tripsController.tripsList)
  .post(authenticateJWT, tripsController.tripsAddTrip)
  .delete(authenticateJWT, tripsController.tripsDeleteTrip);

// Public → read one trip
router
  .route("/trips/:tripCode")
  .get(tripsController.tripsFindByCode)
  .put(authenticateJWT, tripsController.tripsUpdateTrip)
  .delete(authenticateJWT, tripsController.tripsDeleteTrip);

// AUTH ROUTES

router
  .route("/register")
  .post(authController.register);

router
  .route("/login")
  .post(authController.login);

module.exports = router;