import express from "express";
import authRoutes from "./auth.js";
import moviesRoutes from "./movies.js";
import userRoutes from "./users.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/movies", moviesRoutes);
router.use("/users", userRoutes);

export default router;
