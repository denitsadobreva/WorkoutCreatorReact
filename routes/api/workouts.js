const express = require("express");
const router = express.Router();

// @route   GET api/workouts
// @desc    List all workouts of current user
// @access  Private
router.get("/", (req, res) => res.send("Workouts route"));

// @route   POST api/workouts
// @desc    Create a new workout
// @access  Private
router.post("/", (req, res) => res.send("Workouts route"));

// @route   POST api/workouts/:workoutId
// @desc    Edit a workout by workout ID
// @access  Private
router.post("/:workoutId", (req, res) => res.send("Workouts route"));

// @route   DELETE api/workouts/:workoutId
// @desc    Delete a workout by workout ID
// @access  Private
router.delete("/:workoutId", (req, res) => res.send("Workouts route"));

module.exports = router;
