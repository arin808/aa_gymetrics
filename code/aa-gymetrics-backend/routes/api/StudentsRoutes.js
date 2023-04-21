//Dependencies and requirements
const { Router } = require("express");
const Students = require("../../models/Students");
const router = Router();
var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "info" || "error";

//Get student by ID
router.get("/:studentID", async (req, res) => {
  logger.info("========Entering route to get student by ID========");
  //Use request param to find student by ID
  const student = await Students.findOne({
    studentID: Number(req.params.studentID),
  });
  res.json(student);
  logger.info("========Exiting route to get student by ID========");
});

module.exports = router;
