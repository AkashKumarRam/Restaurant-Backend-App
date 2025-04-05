import { Resturant } from "../models/resturantModel.js";

// CREATE RESTURANT
const createResturantController = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    } = req.body;
    if (!title || !coords) {
      return res.status(500).send({
        success: false,
        message: "Please provide title and address",
      });
    }

    const newResturant = new Resturant({
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    });
    await newResturant.save();
    res.status(201).send({
      success: true,
      message: "New Resturant created Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Create Resturant API",
      error,
    });
  }
};

// GET ALL RESTURANTS
const getAllResturantController = async (req, res) => {
  try {
    const resturants = await Resturant.find({});
    if (!resturants) {
      return res.status(404).send({
        success: false,
        message: "No Resturant Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Fetch All Resturants",
      totalCount: resturants.length,
      resturants,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Get All Resturants API",
      error,
    });
  }
};

// GET SINGLE RESTURANT BY ID
const getResturantByIdController = async (req, res) => {
  try {
    const resturant = await Resturant.findById(req.params.id);
    if (!resturant) {
      return res.status(404).send({
        success: false,
        message: "Resturant not Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Resturant found Successfully",
      resturant,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Get Resturant by ID API",
      error,
    });
  }
};

// DELETE RESTURANT
const deleteResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "No Resturant Found or Provide Resturant ID",
      });
    }
    await Resturant.findByIdAndDelete(resturantId);
    return res.status(200).send({
      success: true,
      message: "Resturant Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Delete Resturant API",
      error,
    });
  }
};

export {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
};
