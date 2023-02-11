//Model/Schema for login logs

const { Schema, model } = require("mongoose");

const LoginsSchema = new Schema({
  empID: {
    type: Number,
    required: true,
  },
  empEmail: {
    type: String,
    required: true,
  },
  gymLocation: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
});

const Logins = model("logins", LoginsSchema);

module.exports = Logins;
