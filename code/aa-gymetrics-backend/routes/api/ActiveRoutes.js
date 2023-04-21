//Dependencies and requirements
const { Router } = require("express");
const Actives = require("../../models/Active");
const router = Router();
var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "info" || "error";


//Get all active students
router.get("/", async (req, res) => {
  logger.info("========Entering route to get all active students========");
  try {
    //Use find() to get all results
    const active = await Actives.find();
    //If no return result, throw error for no returned data
    if (!active) {
      logger.error("========No active students found========");
      throw new Error("No active students found");
    }
    //Else means a result is returned; update status and return data
    res.status(200).json(active);
  } catch (error) {
    //Show error message
    logger.error("========Error getting all students:" + error.message + "========")
    res.status(500).json({ message: error.message });
  }
  logger.info("========Exiting route to get all active students========");
});

//Check for existing student
router.get("/existing/:studentID", async (req, res) => {
  logger.info("========Entering route to check for existing student========");
  //Use request param to find student by ID
  const student = await Actives.findOne({
    studentID: Number(req.params.studentID),
  });
  //Update status and return result
  res.json(student);
  logger.info("========Exiting route to check for existing student========");
});
//Get all users of a specific gym (employee-facing)
router.get("/:gymLocation", async (req, res) => {
  try {
    logger.info("========Entering route to get all active students at a specific gym========");
    //Find all from a specific gym
    const specificGymActives = await Actives.find({
      gymLocation: req.params.gymLocation,
    });
    //If no results, return message with no count
    if (!specificGymActives) {
      logger.error("========No active students in " + req.params.gymLocation + "========");
      throw new Error("No active students in " + req.params.gymLocation);
    }
    //Update status
    res.status(200).json(specificGymActives);
  } catch (error) {
    //Update status
    logger.error("========Error getting all students at " + req.params.gymLocation + ":" + error.message + "========")
    res.status(403).json({ message: error.message });
  }
  logger.info("========Exiting route to get all active students at a specific gym========");
});

//Get count of users in active collection based off the gym
router.get("/count/:gymLocation", async (req, res) => {
  try {
    logger.info("========Entering route to get count of active students at a specific gym========")
    //Get a count of documents that have a matching location as the gym
    //pulled from the req.param
    const active = await Actives.countDocuments({
      gymLocation: req.params.gymLocation,
    });
    //If no result returned show message for no result
    if (!active) {
      logger.error("========No active students in " + req.params.gymLocation + "========")
      throw new Error("No active students in " + req.params.gymLocation);
    }
    //Update result and return data
    res.status(200).json(active);
  } catch (error) {
    //Update status and display error message
    logger.error("========Error getting count of active students at " + req.params.gymLocation + ":" + error.message + "========")
    res.status(403).json({ message: error.message });
  }
  logger.info("========Exiting route to get count of active students at a specific gym========");
});

//Add a student to active collection
router.post("/checkIn", async (req, res) => {
  logger.info("========Entering post route to add a student to active collection========");
  //Use req.body to create new model for save
  const newActive = new Actives({
    studentID: req.body.studentID,
    studentFirst: req.body.studentFirst,
    studentLast: req.body.studentLast,
    checkInTime: req.body.checkInTime,
    gymLocation: req.body.gymLocation,
  });
  try {
    //Attempt to save new active student document
    const active = await newActive.save();
    //If save unsuccessful display message
    if (!active) {
      logger.error("========Unable to add active student========");
      throw new Error("Unable to add active student.");
    }
    //Update result and return response
    res.status(200).json(active);
  } catch (error) {
    //Update status and display error
    logger.error("========Error adding active student:" + error.message + "========")
    res.status(500).json({ message: error.message });
  }
  logger.info("========Exiting post route to add a student to active collection========");
});

//Delete a student "checking out"
router.delete("/checkOut/:studentID", async (req, res) => {
  try {
    logger.info("========Entering delete route to remove a student from active collection========");
    //Find student by studentID and delete using param
    const active = await Actives.findOneAndDelete({
      studentID: req.params.studentID,
    });
    //No successful deletion gives a failed response message
    if (!active) {
      logger.error("========Couldn't delete active entry========");
      throw new Error("Couldn't delete active entry");
    } //Update result and return response
    res.status(200).json(active);
  } catch (error) {
    //Update status and display error
    logger.error("========Error deleting active student:" + error.message + "========")
    res.status(500).json({ message: error.message });
  }
  logger.info("========Exiting delete route to remove a student from active collection========");
});
module.exports = router;
