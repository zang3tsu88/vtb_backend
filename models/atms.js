const mongoose = require('mongoose');

const atmsSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    allDay: {
        type: String,
        required: true,
    },
    services: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('atms', atmsSchema);