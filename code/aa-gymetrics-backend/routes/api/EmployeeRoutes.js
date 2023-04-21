//Dependencies and declarations
const { Router } = require("express");
const Employees = require("../../models/Employees");
const router = Router();
var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "info" || "error";

//Get employee by ID for login
router.get("/:empEmail", async (req, res) => {
  try {
    logger.info("========Entering route to get employee by email========");
    //Find employee using id from request param
    const employee = await Employees.findOne({
      empEmail: req.params.empEmail,
    });

    //If theres a result, update status and return data
    res.status(200).json(employee);
  } catch (error) {
    //Show error message
    logger.error("========Error getting employee by email:" + error.message + "========");
    res.status(403).json({ message: error.message });
  }
  logger.info("========Exiting route to get employee by email========");
});


module.exports = router;
