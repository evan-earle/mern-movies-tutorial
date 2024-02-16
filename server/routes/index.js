import express from "express";
import authRoutes from "./auth.js";
import moviesRoutes from "./movies.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/movies", moviesRoutes);

export default router;
