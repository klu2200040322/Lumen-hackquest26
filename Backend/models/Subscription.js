const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  plan: { type: mongoose.Schema.Types.ObjectId, ref: "Plan", required: true },
  status: {
    type: String,
    enum: ["active", "cancelled", "expired"],
    default: "active",
  },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date },
  autoRenew: { type: Boolean, default: true },  // autoRenew is true by default
  dataUsed: { type: Number, default: 0 },       // optional, for ML
  price: { type: Number, default: 0 },          // optional, for ML
  durationDays: { type: Number, default: 30 }   // optional, for ML
});

module.exports = mongoose.model("Subscription", subscriptionSchema);
