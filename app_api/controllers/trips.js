const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
  const q = await Model.find({}).exec();

  if (!q) {
    return res.status(404).json(err);
  } else {
    return res.status(200).json(q);
  }
};

// GET: /trips/:tripCode - lists a single trip
const tripsFindByCode = async (req, res) => {
  const q = await Model.find({ code: req.params.tripCode }).exec();

  if (!q) {
    return res.status(404).json(err);
  } else {
    return res.status(200).json(q);
  }
};

// POST: /trips - add a new trip
const tripsAddTrip = async (req, res) => {
  try {
    const newTrip = await Model.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    res.status(201).json(newTrip);
  } catch (err) {
    console.log("Error creating trip:", err);
    res.status(400).json({ message: "Error creating trip", error: err });
  }
};

// PUT: /trips/:tripCode - update an existing trip
const tripsUpdateTrip = async (req, res) => {
  // Uncomment for debugging
  console.log(req.params);
  console.log(req.body);

  const q = await Model.findOneAndUpdate(
    { code: req.params.tripCode },
    {
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    },
    { new: true } // ensures we return the updated document
  ).exec();

  if (!q) {
    return res.status(400).json({ message: "Trip update failed" });
  } else {
    return res.status(201).json(q);
  }

  // Uncomment for debugging:
  // console.log(q);
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip // include this new export
};