const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PlaceSchema = new Schema({
    location: { type: String, required: true, max: 100 },
    price: { type: Number, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
});


// Export the model
module.exports = mongoose.model('Product', PlaceSchema);
