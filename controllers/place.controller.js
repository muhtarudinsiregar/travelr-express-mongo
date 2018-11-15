const Place = require('../models/place.model');

exports.store = function (req, res) {
    let place = new Place(
        {
            location: req.body.location,
            latitude: req.body.latitude,
            longitude: req.body.longitude
        }
    );

    place.save(function (err) {
        if (err) return console.error(err);
        res.send('Place Created successfully')
    })
};

exports.destroy = function (req, res) {
    Place.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.json({
            status: 'success',
            message: 'Deleted successfully!'
        });
    })
};
