// schema for a user account
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // must be unique
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true // hashed password
  },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  streak: { type: Number, default: 0 },
  lastActive: { type: Date, default: null },
  badges: { type: [String], default: [] },
  calorieGoal: { type: Number, default: 2000 },
}, { timestamps: true }); // add createdAt / updatedAt

module.exports = mongoose.model('User', userSchema); // export model