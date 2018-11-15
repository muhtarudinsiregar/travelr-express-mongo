const Place = require('../models/place.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.place_create = function (req, res) {
    let place = new Place(
        {
            name: req.body.name,
            latitude: req.body.latitude,
            longitude: req.body.longitude
        }
    );

    place.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Place Created successfully')
    })
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
