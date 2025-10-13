const express = require("express"); // Express app
const router = express.Router();    // Router logic

// Import controllers
const tripsController = require("../controllers/trips");

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

module.exports = router;