const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const place_controller = require('../controllers/place.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/index', place_controller.test);

module.exports = router;
