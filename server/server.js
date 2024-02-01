//Import dependencies
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import { connectToDB } from "./config/database.js";

dotenv.config({ path: "./config/.env" });

//Create an express app
const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//Connect to DB
connectToDB();

//Start server
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
