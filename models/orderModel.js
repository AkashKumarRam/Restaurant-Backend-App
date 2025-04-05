import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema(
  {
    foods: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Foods",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["Preparing", "Prepare", "On the way", "Delivered"],
      default: "Preparing",
    },
  },
  { timestamps: true }
);

export const Orders = mongoose.model("Orders", ordersSchema);
