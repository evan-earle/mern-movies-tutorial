//Import dependencies
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import { connectToDB } from "./config/database.js";
import allRoutes from "./routes/index.js";
import cookieParser from "cookie-parser";
dotenv.config({ path: "./config/.env" });

//Create an express app
const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

//Connect to DB
connectToDB();

//Routes
app.use("/api", allRoutes);

//Error handler
app.use((err, req, res, next) => {
  console.log(err);
  const status = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(status).json({ message, stack: err.stack });
});

//Start server
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
