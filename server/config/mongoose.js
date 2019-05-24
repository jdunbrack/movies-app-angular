const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const models_path = path.join(__dirname + "./../models");

mongoose.connect('mongodb://localhost/belt_exam');

fs.readdirSync(models_path).forEach(file => {
    if (file.indexOf('.js') >= 0) {
        require(models_path + "/" + file);
    }
})