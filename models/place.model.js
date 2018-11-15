const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PlaceSchema = new Schema({
    location: { type: String, required: true, max: 100 },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
});

// Export the model
module.exports = mongoose.model('Place', PlaceSchema);
