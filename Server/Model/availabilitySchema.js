const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
    counselorName: String,
    date: String,
    status: String,
});

const calendarData = new mongoose.model("calendardatas",availabilitySchema);

module.exports = calendarData;
