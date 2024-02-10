import express from "express";
import {
  register,
  uploadPhoto,
  storePhoto,
  login,
  logout,
  isLoggedIn,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/upload", uploadPhoto);
router.post("/storePhoto", storePhoto);
router.post("/login", login);
router.get("/logout", logout);
router.get("/is_logged_in", isLoggedIn);

export default router;
