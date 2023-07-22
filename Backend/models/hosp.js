const mongoose =  require('mongoose');
const { stringify } = require('querystring');

const multiSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Ratings: {
        type: Number,
        required: true
    },
    Speciality: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Website: {
        type:String,
        required: true
    },
    Gmap: {
        type: String,
        required: true
    }
})
const List = mongoose.model('hosp', multiSchema);
module.exports = List;