const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const place_controller = require('../controllers/place.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/index', place_controller.test);
router.get('/create', place_controller.create);
router.get('/:id/update', place_controller.update);
router.get('/:id/delete', place_controller.delete);
module.exports = router;
