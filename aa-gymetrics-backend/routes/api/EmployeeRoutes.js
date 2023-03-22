//Dependencies and declarations
const { Router } = require("express");
const Employees = require("../../models/Employees");
const router = Router();
const jwt = require("jsonwebtoken");

//Get employee by ID for login
router.get("/:empEmail", async (req, res) => {
  try {
    //Find employee using id from request param
    const employee = await Employees.findOne({
      empEmail: req.params.empEmail,
    });

    //If theres a result, update status and return data
    res.status(200).json(employee);
  } catch (error) {
    //Show error message
    res.status(403).json({ message: error.message });
  }
});

router.get("/token/:empEmail", async (req, res) => {
  try {
    const employee = await Employees.findOne({
      empEmail: req.params.empEmail,
    });
    const token = jwt.sign({ employee }, "secret");

    res.status(200).json(token);
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
});
module.exports = router;
