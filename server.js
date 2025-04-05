import express from "express";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config({
  path: "./.env",
});

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Import Routes
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import resturantRoutes from "./routes/resturantRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";

app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/resturant", resturantRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/food", foodRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Restaurant Application" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Running on PORT = ${PORT}`.bgGreen);
});
