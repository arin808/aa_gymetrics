//Dependencies and requirements
const { Router } = require("express");
const Logins = require("../../models/Logins");
const router = Router();

//Get all login logs
router.get("/", async (req, res) => {
  try {
    //Use find() for all entries
    const login = await Logins.find();
    if (!login) {
      //If no returned result display message
      throw new Error("No logins found");
    }
    //Update status and return result
    res.status(200).json(login);
  } catch (error) {
    //DIsplay error message
    res.status(403).json({ message: error.message });
  }
});

//Create and write new login log
router.post("/", async (req, res) => {
  //Setup model from req.body
  const newLog = new Logins(req.body);
  try {
    //Attempt to save new model using req.body
    const login = await newLog.save();
    //If save unsuccessful return error message
    if (!login) {
      throw new Error("Something went wrong saving the login log.");
    }
    //Update status and return response
    res.status(200).json(true);
  } catch (error) {
    //Update status and display error
    res.status(403).json({ message: error.message });
  }
});

module.exports = router;
