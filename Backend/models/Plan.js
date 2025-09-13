const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["Fibernet", "Broadband Copper"], required: true },
  price: { type: Number, required: true },
  validity: { type: Number, required: true }, // in days
  dataLimit: { type: Number, required: true }, // in GB
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Plan", planSchema);
