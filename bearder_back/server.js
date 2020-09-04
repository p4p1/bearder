const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router.js');
const cors = require('cors');
var app = express();

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '/.env') })

var port = process.env.port || 8080;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
app.use('/', router);

app.listen(port, function() {
  console.log("Server running on port:" + port);
});


app.get("/isup", function (request, response) {
  console.log("Hello World request received");
  console.log(process.env.SECRETKEY);
  console.log(process.env.IBM_APIKEY);
  response.json({ "data": "Hello World"});
});
