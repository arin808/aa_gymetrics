//Model/Schema for Active Students across all gyms

const { Schema, model } = require("mongoose");

const ActiveSchema = new Schema({
  studentID: {
    type: Number,
    required: true,
  },
  studentFirst: {
    type: String,
    required: true,
  },
  studentLast: {
    type: String,
    required: true,
  },
  checkInTime: {
    type: String,
    required: true,
  },
  gymLocation: {
    type: String,
    required: true,
  },

  versionKey: false,
});

const Active = model("active", ActiveSchema);

module.exports = Active;
