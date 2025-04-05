import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

// Register || POST
const registerController = async (req, res) => {
  try {
    const { userName, email, password, address, phone, answer } = req.body;

    // Validation
    if (!userName || !email || !password || !address || !phone || !answer) {
      return res
        .status(500)
        .send({ success: false, message: "All Fields are Required" });
    }

    // Check User already exists or not
    const existing = await User.findOne({ email: email });

    if (existing) {
      return res
        .status(500)
        .send({
          success: false,
          message: "You are already registed please Login",
        });
    }

    // hashing password
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create New User
    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
      address,
      phone,
      answer,
    });
    res
      .status(201)
      .send({ success: true, message: "User created Successfully", user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Register API", error });
  }
};

// Login || POST
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res
        .status(500)
        .send({ success: false, message: "Please Provide email and password" });
    }

    // Check User
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }

    // Check user password || Compare Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(500)
        .send({ success: false, message: "Invalid Credential" });
    }

    // Generate token
    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // eta korle response e password field jabe na ete security aro barbe
    user.password = undefined;

    res
      .status(200)
      .send({ success: true, message: "Login Successfully", token, user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error occured While Login", error });
  }
};

export { registerController, loginController };
