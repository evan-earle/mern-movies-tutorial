import express from "express";
import authRoutes from "./auth.js";
import moviesRoutes from "./movies.js";
import userRoutes from "./users.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/movies", checkAuth, moviesRoutes);
router.use("/users", checkAuth, userRoutes);

export default router;
