const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
  salePointName: String,
  address: String,
  status: String,
  openHours: [{ days: String, hours: String }],
  rko: String,
  openHoursIndividual: [{ days: String, hours: String }],
  officeType: String,
  salePointFormat: String,
  suoAvailability: String,
  hasRamp: String,
  latitude: Number,
  longitude: Number,
  metroStation: String,
  distance: Number,
  kep: Boolean,
  myBranch: Boolean,
});

const Branch = mongoose.model('Branch', branchSchema);

module.exports = Branch;
