const mongoose = require("mongoose");
 
const planSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  speed: { type: String }, 
  autoRenewal: { type: Boolean, default: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" }
});
 
module.exports = mongoose.model("Plan", planSchema);