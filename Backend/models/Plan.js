const mongoose = require("mongoose");
 
const planSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., "Basic", "Pro", "Enterprise"
  price: { type: Number, required: true },
  speed: { type: String }, // optional, e.g., "100Mbps"
  autoRenewal: { type: Boolean, default: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" }
});
 
module.exports = mongoose.model("Plan", planSchema);