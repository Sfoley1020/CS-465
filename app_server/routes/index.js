var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

// Home Page
router.get('/', ctrlMain.index);

// Travel page route
router.use('/travel', require('./travel'));

module.exports = router;
