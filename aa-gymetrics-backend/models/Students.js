//Model/Schema for students

const { Schema, model } = require("mongoose");

const StudentsSchema = new Schema({
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
  studentEmail: {
    type: String,
    required: true,
  },
});

const Students = model("students", StudentsSchema);

module.exports = Students;
