import express from "express";
import {
  deleteProfileControlller,
  getUserController,
  resetPasswordController,
  updatePasswordController,
  updateUserController,
} from "../controllers/userController.js";
import { jwtAuthMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// User Routes ---

// GET User || GET
router.get("/getUser", jwtAuthMiddleware, getUserController);

// Update Profile || PUT
router.put("/updateUser", jwtAuthMiddleware, updateUserController);

// Password UPDATE || POST
router.post("/updatePassword", jwtAuthMiddleware, updatePasswordController);

// Reset Password || POST
router.post("/resetPassword", jwtAuthMiddleware, resetPasswordController);

// Delete User || Delete
router.delete("/deleteUser/:id", jwtAuthMiddleware, deleteProfileControlller);

export default router;
