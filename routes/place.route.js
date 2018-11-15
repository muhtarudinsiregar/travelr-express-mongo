const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const place_controller = require('../controllers/place.controller');

router.post('/store', place_controller.store);
// router.get('/:id/update', place_controller.update);
router.delete('/:id/destroy', place_controller.destroy);
module.exports = router;
