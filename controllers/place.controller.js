const Place = require('../models/place.model');

exports.all = function (req, res) {
    Place.find({}, function (err, places) {
        var placeMapping = {};

        places.forEach(function (place) {
            placeMapping[place._id] = place;
        });

        res.json({
            status: 'success',
            message: 'Success get all places',
            data: placeMapping
        });
    });
};

exports.store = function (req, res) {
    (async function () {

        const insertMany = await Place.insertMany(req.body.places);

        res.status(200).json({ status: 'success', message: 'Place Created successfully' });
    })();
};

exports.update = function (req, res) {
    Place.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, place) {
        if (err) return next(err);

        res.json({
            status: 'success',
            message: 'Update successfully!'
        });
    });
};

exports.show = function (req, res) {
    Place.findById(req.params.id, function (err, place) {
        if (err) return next(err);

        res.json({
            status: 'success',
            message: 'Update successfully!',
            data: place
        });
    });
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
