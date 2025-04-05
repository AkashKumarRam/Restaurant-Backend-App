import express from "express";
import { jwtAuthMiddleware } from "../middlewares/authMiddleware.js";
import {
  changeOrderStatusController,
  createFoodController,
  deleteFoodController,
  getAllFoodsController,
  getFoodByResturantController,
  getSingleFoodController,
  placeOrderController,
  updateFoodController,
} from "../controllers/foodController.js";
import { isAdminMiddleware } from "../middlewares/adminMiddleware.js";

const router = express.Router();

// Routes

// CREATE FOOD || POST
router.post("/create", jwtAuthMiddleware, createFoodController);

// GET ALL FOOD || GET
router.get("/getAll", getAllFoodsController);

// GET SINGLE FOOD || GET
router.get("/get/:id", getSingleFoodController);

// GET FOOD BY RESTURANT || GET
router.get("/getByResturant/:id", getFoodByResturantController);

// UPDATE FOOD || PUT
router.put("/update/:id", jwtAuthMiddleware, updateFoodController);

// DELETE FOOD || DELETE
router.delete("/delete/:id", jwtAuthMiddleware, deleteFoodController);

// PLACE ORDER || POST
router.post("/placeorder", jwtAuthMiddleware, placeOrderController);

// ORDER STATUS ||POST
router.post(
  "/orderStatus/:id",
  jwtAuthMiddleware,
  isAdminMiddleware,
  changeOrderStatusController
);

export default router;
