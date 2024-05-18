const mongoose = require("mongoose");

const windowSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    windowNumber: {
      type: Number,
      enum: [1, 2, 3], // Specifies that windowNumber can only be 1, 2, or 3
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Event", windowSchema);
