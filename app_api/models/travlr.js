const mongoose = require('mongoose');

// Trip Schema – JavaScript version
const tripSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, 'Trip code is required'],
    trim: true,
    index: true
  },
  name: {
    type: String,
    required: [true, 'Trip name is required'],
    trim: true,
    minlength: [3, 'Trip name must be at least 3 characters long'],
    index: true
  },

  // Length: store as STRING (“4 nights / 5 days”)
  length: {
    type: String,
    required: [true, 'Trip length is required']
  },

  start: {
    type: Date,
    required: [true, 'Start date is required']
  },

  resort: {
    type: String,
    required: [true, 'Resort name is required'],
    trim: true
  },

  perPerson: {
    type: Number,
    required: [true, 'Price per person is required'],
    min: [0, 'Price must be a positive number']
  },

  image: {
    type: String,
    required: [true, 'Image filename is required'],
    trim: true
  },

  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    minlength: [20, 'Description must be at least 20 characters long']
  }
});

module.exports = mongoose.model('trips', tripSchema);