import { Category } from "../models/categoryModel.js";

// Create Category
const createCategoryController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    if (!title) {
      return res.status(500).send({
        success: false,
        message: "Please provide category title",
      });
    }
    const newCategory = new Category({ title, imageUrl });
    await newCategory.save();
    return res.status(201).send({
      success: true,
      message: "New Category Created Successfully",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Create Category API",
      error,
    });
  }
};

// GET ALL CATEGORY
const getAllCategoryController = async (req, res) => {
  try {
    const categories = await Category.find({});
    if (!categories) {
      return res.status(404).send({
        success: false,
        message: "Category not Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Fetch All Categories",
      totalCategories: categories.length,
      categories,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Get All Category API",
      error,
    });
  }
};

// Update Category || PUT
const updateCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, imageUrl } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { title, imageUrl },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).send({
        success: false,
        message: "Category Not Updated",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
      updatedCategory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Update Category API",
      error,
    });
  }
};

// Delete Category || DELETE
const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please provide Category ID",
      });
    }
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category Not Found With this Id",
      });
    }
    await Category.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      message: "Category Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Delete Category API",
      error,
    });
  }
};

export {
  createCategoryController,
  getAllCategoryController,
  updateCategoryController,
  deleteCategoryController,
};
