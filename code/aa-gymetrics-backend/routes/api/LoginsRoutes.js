//Dependencies and requirements
const { Router } = require("express");
const Logins = require("../../models/Logins");
const router = Router();
var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "info" || "error";

//Get all login logs
router.get("/", async (req, res) => {
  try {
    logger.info("========Entering route to get all login logs========");
    //Use find() for all entries
    const login = await Logins.find();
    if (!login) {
      //If no returned result display message
      logger.error("========No logins found========");
      throw new Error("No logins found");
    }
    //Update status and return result
    res.status(200).json(login);
  } catch (error) {
    //Display error message
    logger.error("========Error getting all logins:" + error.message + "========");
    res.status(403).json({ message: error.message });
  }
  logger.info("========Exiting route to get all login logs========");
});

//Create and write new login log
router.post("/", async (req, res) => {
  logger.info("========Entering post route to create new login log========");
  //Setup model from req.body
  const newLog = new Logins(req.body);
  try {
    //Attempt to save new model using req.body
    const login = await newLog.save();
    //If save unsuccessful return error message
    if (!login) {
      logger.error("========Something went wrong saving the login log========");
      throw new Error("Something went wrong saving the login log.");
    }
    //Update status and return response
    res.status(200).json(true);
  } catch (error) {
    //Update status and display error
    logger.error("========Error creating new login log:" + error.message + "========")
    res.status(403).json({ message: error.message });
  }
  logger.info("========Exiting post route to create new login log========");
});

module.exports = router;
