//app.js
const express = require('express');
const bodyParser = require('body-parser');
const place = require('./routes/place.route');

// Imports routes for the product
const app = express();
app.use('/place', place);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
