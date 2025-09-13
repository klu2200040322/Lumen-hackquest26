const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  description: { type: String },
  percentage: { type: Number, required: true },
  validTill: { type: Date, required: true },
  applicablePlans: [{ type: mongoose.Schema.Types.ObjectId, ref: "Plan" }],
});

module.exports = mongoose.model("Discount", discountSchema);
