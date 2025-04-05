import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Category title is required"],
    },
    imageUrl: {
      type: String,
      default:
        "https://cdn-icons-png.freepik.com/256/8449/8449978.png?semt=ais_hybrid",
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema);
