const mongoose = require("mongoose");

const BEST = mongoose.model("BEST", new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  school: {
    type: String,
  },
  cur_date: {
    type: Date,
    default: Date.now(),
  }
}));

module.exports = BEST;