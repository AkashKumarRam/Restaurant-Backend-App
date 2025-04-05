import { Foods } from "../models/foodModel.js";
import { Orders } from "../models/orderModel.js";

// CREATE FOOD
const createFoodController = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
    } = req.body;
    if (!title || !description || !price || !resturant) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    const newFood = new Foods({
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
    });
    await newFood.save();
    return res.status(201).send({
      success: true,
      message: "New Food Item Created Successfully",
      newFood,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Create Food API",
      error,
    });
  }
};

// Get All Foods
const getAllFoodsController = async (req, res) => {
  try {
    const allFoods = await Foods.find({});
    if (!allFoods) {
      return res.status(404).send({
        success: false,
        message: "No Foods Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "All Foods are Found Successfully",
      totalFoods: allFoods.length,
      allFoods,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Get All Food API",
      error,
    });
  }
};

// Get Single Food
const getSingleFoodController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "You Provide Wrong ID",
      });
    }
    const getSingleFood = await Foods.findById(id);
    if (!getSingleFood) {
      return res.status(404).send({
        success: false,
        message: "No Food Item Found With this ID",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Food Item Found Successfully",
      getSingleFood,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Get Single Food API",
      error,
    });
  }
};

// Get Food by Resturant
const getFoodByResturantController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "You Provide Wrong ID",
      });
    }
    const food = await Foods.find({ resturant: id });
    if (!food) {
      return res.status(404).send({
        success: false,
        message: "No Food Item Found With this Resturant ID",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Food Base on Resturant",
      food,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Get Food by Resturant API",
      error,
    });
  }
};

// Update Food
const updateFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      return res.status(404).send({
        success: false,
        message: "You are Providing Wrong Food ID",
      });
    }
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
    } = req.body;
    if (!title || !description || !price) {
      return res.status(500).send({
        success: false,
        message: "Title,Dsecription and Price Must Required",
      });
    }
    const updatedFood = await Foods.findByIdAndUpdate(
      foodId,
      {
        title,
        description,
        price,
        imageUrl,
        foodTags,
        category,
        code,
        isAvailable,
        resturant,
        rating,
      },
      { new: true }
    );
    if (!updatedFood) {
      return res.status(500).send({
        success: false,
        message: "Food didnot updated due to some Technical Issues",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Food Item Updated Successfully",
      updatedFood,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Update Food API",
      error,
    });
  }
};

// Delete Food
const deleteFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      return res.status(404).send({
        success: false,
        message: "You are Providing Wrong Food ID",
      });
    }
    await Foods.findByIdAndDelete(foodId);
    return res.status(200).send({
      success: true,
      message: "Food item Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Delete Food API",
      error,
    });
  }
};

// Place Order
const placeOrderController = async (req, res) => {
  try {
    const { cart } = req.body;
    if (!cart) {
      return res.status(500).send({
        success: false,
        message: "Please Provide Food cart or payment method",
      });
    }
    let total = 0;
    cart.map((i) => {
      total += i.price;
    });
    const newOrder = new Orders({
      foods: cart,
      payment: total,
      buyer: req.body.id,
    });
    await newOrder.save();
    return res.status(201).send({
      success: true,
      message: "Order placed successfully",
      newOrder,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Place Order API",
      error,
    });
  }
};

// Change Order Status
const changeOrderStatusController = async (req, res) => {
  try {
    const orderId = req.params.id;
    if (!orderId) {
      return res.status(500).send({
        success: false,
        message: "You are providing wrong Order ID",
      });
    }
    const { status } = req.body;
    const order = await Orders.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    return res.status(200).send({
      success: true,
      message: "Order Status updated Successfully",
      order,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Change Order Status API",
      error,
    });
  }
};

export {
  createFoodController,
  getAllFoodsController,
  getSingleFoodController,
  getFoodByResturantController,
  updateFoodController,
  deleteFoodController,
  placeOrderController,
  changeOrderStatusController,
};
