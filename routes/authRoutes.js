import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authControllers.js";

const router = express.Router();

// Auth Routes ---

// Register || POST
router.post("/register", registerController);

// Login || POST
router.post("/login", loginController);

export default router;
