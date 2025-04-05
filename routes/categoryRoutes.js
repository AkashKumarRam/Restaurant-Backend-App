import express from "express";
import { jwtAuthMiddleware } from "../middlewares/authMiddleware.js";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

// Routes

// CREATE CATEGORY || POST
router.post("/create", jwtAuthMiddleware, createCategoryController);

// Get All Category || GET
router.get("/getAll", getAllCategoryController);

// Update Category || PUT
router.put("/update/:id", jwtAuthMiddleware, updateCategoryController);

// Delete Category || DELETE
router.delete("/delete/:id", jwtAuthMiddleware, deleteCategoryController);

export default router;
