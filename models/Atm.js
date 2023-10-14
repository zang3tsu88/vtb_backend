
const mongoose = require('mongoose');

const atmSchema = new mongoose.Schema({
  address: String,
  latitude: Number,
  longitude: Number,
  allDay: Boolean,
  services: {
    wheelchair: {
      serviceCapability: String,
      serviceActivity: String,
    },
    blind: {
      serviceCapability: String,
      serviceActivity: String,
    },
    nfcForBankCards: {
      serviceCapability: String,
      serviceActivity: String,
    },
    qrRead: {
      serviceCapability: String,
      serviceActivity: String,
    },
    supportsUsd: {
      serviceCapability: String,
      serviceActivity: String,
    },
    supportsChargeRub: {
      serviceCapability: String,
      serviceActivity: String,
    },
    supportsEur: {
      serviceCapability: String,
      serviceActivity: String,
    },
    supportsRub: {
      serviceCapability: String,
      serviceActivity: String,
    },
  },
});

const ATM = mongoose.model('ATM', atmSchema);

module.exports = ATM;
