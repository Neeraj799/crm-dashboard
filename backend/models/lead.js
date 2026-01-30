import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    saleName: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["Open", "Lost", "Sold", "Stalled"],
      default: "Open",
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    stage: {
      type: Number,
      min: 0,
      max: 100,
      required: true,
    },

    nextActivityDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;
