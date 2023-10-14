const mongoose = require('mongoose');

const officesSchema = new mongoose.Schema({
    salePointName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    openHours: {
        type: String,
        required: true,
    },
    rko: {
        type: String,
        required: true,
    },
    salePointFormat: {
        type: String,
        required: true,
    },
    suoAvailability: {
        type: String,
        required: true,
    },
    hasRamp: {
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
    metroStation: {
        type: String,
        required: true,
    },
    distance: {
        type: Number,
        required: true,
    },
    kep: {
        type: String,
        required: true,
    },
    myBranch: {
        type: String,
        required: true,
    },

})

module.exports = mongoose.model('offices', officesSchema);