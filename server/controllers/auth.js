import bcryptjs from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";

export const register = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return next({ status: 401, message: "User already exists" });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json("New user created");
  } catch (error) {
    return next(error);
  }
};

export const uploadPhoto = async (req, res, next) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "ml_default",
    });
    return res.status(200).json(uploadedResponse);
  } catch (error) {
    return next(error);
  }
};
