//Dependencies and requirements
const { Router } = require("express");
const Students = require("../../models/Students");
const router = Router();

//Get student by ID
router.get("/:studentID", async (req, res) => {
  //Use request param to find student by ID
  const student = await Students.findOne({
    studentID: Number(req.params.studentID),
  });
  res.json(student);
});

module.exports = router;
