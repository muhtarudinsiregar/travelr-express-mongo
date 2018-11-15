const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const place_controller = require('../controllers/place.controller');

router.get('/all', place_controller.all);

router.post('/store', place_controller.store);
router.put('/:id/update', place_controller.update);

router.get('/:id', place_controller.show);
router.delete('/:id/destroy', place_controller.destroy);
module.exports = router;
