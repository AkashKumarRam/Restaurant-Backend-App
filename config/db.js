import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to Database ${mongoose.connection.host}`.bgMagenta);
  } catch (error) {
    console.log("MongoDB Connection Error =", error);
  }
};

export default connectDB;
