const mongoose = require("mongoose");
 
const adminActivitySchema = new mongoose.Schema(
  {
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    actionType: {
      type: String,
      enum: ["plan_modification", "discount_modification", "general"],
      required: true,
    },
    details: { type: String }, // e.g., "Updated Plan: Fibernet 100Mbps"
    timestamp: { type: Date, default: Date.now },
    metadata: { type: Object },
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("AdminActivity", adminActivitySchema);