import express from "express";
import { jwtAuthMiddleware } from "../middlewares/authMiddleware.js";
import {
  createResturantController,
  deleteResturantController,
  getAllResturantController,
  getResturantByIdController,
} from "../controllers/resturantController.js";

const router = express.Router();

//routes

// CREATE RESTURANT || POST
router.post("/create", jwtAuthMiddleware, createResturantController);

// GET ALL RESTURANTS || GET
router.get("/getAll", getAllResturantController);

// GET RESTUTANT BY ID || GET
router.get("/get/:id", getResturantByIdController);

// DELETE RESTURANT || DELETE
router.delete("/delete/:id", jwtAuthMiddleware, deleteResturantController);
export default router;
