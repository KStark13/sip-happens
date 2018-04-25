const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const winesSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  flavor: { type: String, required: true },
  wine: { type: Date, default: Date.now },
  description: { type: String, required: true }
});

const Wines = mongoose.model("Wines", winesSchema);

module.exports = Wines;
