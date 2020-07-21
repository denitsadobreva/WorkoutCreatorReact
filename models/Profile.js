const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  workouts: [
    {
      type: Schema.Types.ObjectId,
      ref: "workout",
    },
  ],
  logs: [
    {
      type: Schema.Types.ObjectId,
      ref: "log",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
