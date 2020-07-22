const express = require("express");
const router = express.Router();

// @route   GET api/exercises
// @desc    Get all exercises
// @access  Public
router.get("/", (req, res) => res.send("Exercise route"));

// @route   GET api/exercises/:exerciseId
// @desc    Get exercise by exercise ID
// @access  Public
router.get("/:exerciseId", (req, res) => res.send("Exercise route"));

// @route   GET api/level/:level
// @desc    Get all exercises by exercise level
// @access  Public
router.get("/level/:level", (req, res) => res.send("Exercise route"));

// @route   GET api/type/:type
// @desc    Get all exercises by exercise type
// @access  Public
router.get("/type/:type", (req, res) => res.send("Exercise route"));

// @route   GET api/muscleGroups/:muscleGroup
// @desc    Get all exercises by muscle group
// @access  Public
router.get("/muscleGroups/:muscleGroup", (req, res) =>
  res.send("Exercise route")
);

// @route   GET api/equipment/:equipment
// @desc    Get all exercises by equipment
// @access  Public
router.get("/equipment/:equipment", (req, res) => res.send("Exercise route"));

module.exports = router;
