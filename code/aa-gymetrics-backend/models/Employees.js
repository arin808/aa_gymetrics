//Model/Schema for employees

const { Schema, model } = require("mongoose");

const EmployeesSchema = new Schema({
  empID: {
    type: Number,
    required: true,
  },
  empFirst: {
    type: String,
    required: true,
  },
  empLast: {
    type: String,
    required: true,
  },
  empEmail: {
    type: String,
    required: true,
  },
  empPassword: {
    type: String,
    required: true,
  },
});

const Employees = model("employees", EmployeesSchema);

module.exports = Employees;
