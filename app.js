//app.js
const express = require('express');
const bodyParser = require('body-parser');

const place = require('./routes/place.route');
const app = express();

// setup mongoose
let db_url = 'mongodb://<dbuser>:<dbpassword>@ds163176.mlab.com:63176/travelr';
const mongoDB = process.env.MONGODB_URI || db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Imports routes for the places
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/place', place);

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
