const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// EXERCISE SCHEMA
const exerciseSchema = new Schema({
  name: { type: String },
  weight: { type: Number, min: [0, "Can't go below 0!"] },
  sets: { type: Number, min: [0, "Can't go below 0!"] },
  reps: { type: Number, min: [0, "Can't go below 0!"] },
});

const combinedExercisesSchema = new Schema({
  squat: exerciseSchema,
  bench: exerciseSchema,
  row: exerciseSchema,
  shoulderpress: exerciseSchema,
  deadlift: exerciseSchema,
});

// WORKOUT SCHEMA - got weird error here so I made separate schemas for all of the exercises
const workoutSchema = new Schema(
  {
    username: { type: String, required: true },
    exercisetype: { type: Boolean, required: true },
    workout: combinedExercisesSchema,
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

const Exercise = mongoose.model("Exercise", workoutSchema);

module.exports = Exercise;
