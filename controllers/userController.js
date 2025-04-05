import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

// GET User Info
const getUserController = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.id });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not Found",
      });
    }
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "User data get Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in GET user API",
      error,
    });
  }
};

// UPDATE USER
const updateUserController = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.id });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Update
    const { userName, address, phone } = req.body;
    if (userName) user.userName = userName;
    if (address) user.address = address;
    if (phone) user.phone = phone;

    await user.save();
    return res.status(200).send({
      success: true,
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ success: false, message: "Error in update user profile", error });
  }
};

// UPDATE USER PASSWORD
const updatePasswordController = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.id });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not Found",
      });
    }
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res.status(500).send({
        success: false,
        message: "Please provide Old and New Password field",
      });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(404).send({
        success: false,
        message: "Password mismatched",
      });
    }

    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;

    await user.save();
    return res.status(200).send({
      success: true,
      message: "User password updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in password update API",
      error,
    });
  }
};

// RESET PASSWORD || POST
const resetPasswordController = async (req, res) => {
  try {
    const { email, newPassword, answer } = req.body;
    if (!email || !newPassword || !answer) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields",
      });
    }
    const user = await User.findOne({ email, answer });
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User not found or Invalid answer",
      });
    }
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Reset Password API",
      error,
    });
  }
};

// Delete User Account || DELETE
const deleteProfileControlller = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Your account has been deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Delete User Profile API",
      error,
    });
  }
};

export {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteProfileControlller,
};
