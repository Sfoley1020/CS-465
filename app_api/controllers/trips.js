const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// Import shared validation + error handling
const { validateTripInput } = require('../common/validators');
const { handleError } = require('../common/errorHandler');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
  try {
    const q = await Model.find({}).exec();
    return res.status(200).json(q);
  } catch (error) {
    return handleError(res, error, "Failed to retrieve trips");
  }
};

// GET: /trips/:tripCode - lists a single trip
const tripsFindByCode = async (req, res) => {
  try {
    const q = await Model.find({ code: req.params.tripCode }).exec();
    return res.status(200).json(q);
  } catch (error) {
    return handleError(res, error, "Failed to retrieve trip");
  }
};

// POST: /trips - add a new trip
// Enhanced with centralized validation + error handler
const tripsAddTrip = async (req, res) => {
  try {
    // Validate input using shared algorithm
    const errors = validateTripInput(req.body);
    if (errors.length > 0) {
      return res.status(400).json({
        status: "fail",
        errors
      });
    }

    // Create the new trip if validation passes
    const newTrip = await Model.create(req.body);
    return res.status(201).json(newTrip);

  } catch (error) {
    return handleError(res, error, "Error creating trip");
  }
};

// PUT: /trips/:tripCode - update an existing trip
// Also enhanced with centralized validation + shared error handler
const tripsUpdateTrip = async (req, res) => {
  try {
    // Validate before updating
    const errors = validateTripInput(req.body);
    if (errors.length > 0) {
      return res.status(400).json({
        status: "fail",
        errors
      });
    }

    // Attempt update
    const q = await Model.findOneAndUpdate(
      { code: req.params.tripCode },
      req.body,
      { new: true }
    ).exec();

    if (!q) {
      return res.status(404).json({ message: "Trip not found" });
    }

    return res.status(200).json(q);

  } catch (error) {
    return handleError(res, error, "Error updating trip");
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};