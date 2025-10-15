const express = require("express"); // Express app
const router = express.Router();    // Router logic

// Import controllers
const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");

// define route for our trips endpoint
router
  .route("/trips")
  .get(tripsController.tripsList)       // GET all trips
  .post(tripsController.tripsAddTrip);  // POST new trip 

// define route for single trip lookup or update
router
  .route("/trips/:tripCode")
  .get(tripsController.tripsFindByCode)   // GET single trip by code
  .put(tripsController.tripsUpdateTrip);  // PUT update existing trip

// define route for user registration  ← NEW
router
  .route("/register")
  .post(authController.register);

module.exports = router;