const express = require('express');
const app = express();

require('./server/config/mongoose');

app.use(express.static(__dirname  + "/public/dist/public"));

require('./server/config/routes')(app);