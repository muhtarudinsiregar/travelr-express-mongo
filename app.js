//app.js
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const place = require('./routes/place.route');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

let dev_db_url = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@ds163176.mlab.com:63176/travelr`;
const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Imports routes for the places
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/place', place);
app.get('/', (req, res) => {
    res.send(process.env.DB_USERNAME);
})
let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(process.env.DB_USERNAME);

    console.log('Server is up and running on port numner ' + port);
});
