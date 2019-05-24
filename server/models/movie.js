const mongoose = require('mongoose');

module.exports = () => {
    var ReviewSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 3
        },
        score: {
            type: Number,
            min: 1,
            max: 5,
            required: true
        },
        comment: {
            type: String,
            required: true,
            minlength: 3
        }
    }, {timestamps: true});

    mongoose.model('Review', ReviewSchema);

    var MovieSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        reviews: [ReviewSchema]
    }, {timestamps: true});

    mongoose.model('Movie', MovieSchema);

    return [mongoose.model('Movie'), mongoose.model('Review')];
}