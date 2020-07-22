const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Exercise = require("../../models/Exercise");

// @route   GET api/exercises
// @desc    Get all exercises
// @access  Public
router.get("/", async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/exercises/:id
// @desc    Get exercise by exercise ID
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);

    if (!exercise) {
      return res.status(404).json({ msg: "Exercise not found" });
    }

    res.json(exercise);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route   GET api/level/:level
// @desc    Get all exercises by exercise level
// @access  Public
router.get("/level/:level", async (req, res) => {
  try {
    const exercises = await Exercise.find({ level: req.params.level });
    res.json(exercises);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/type/:type
// @desc    Get all exercises by exercise type
// @access  Public
router.get("/type/:type", async (req, res) => {
  try {
    const exercises = await Exercise.find({ type: req.params.type });
    res.json(exercises);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/muscleGroups/:muscleGroup
// @desc    Get all exercises by muscle group
// @access  Public
router.get("/muscleGroups/:muscleGroup", async (req, res) => {
  try {
    const exercises = await Exercise.find({
      muscleGroup: req.params.muscleGroup,
    });
    res.json(exercises);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/equipment/:equipment
// @desc    Get all exercises by equipment
// @access  Public
router.get("/equipment/:equipment", async (req, res) => {
  try {
    const exercises = await Exercise.find({ equipment: req.params.equipment });
    res.json(exercises);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
