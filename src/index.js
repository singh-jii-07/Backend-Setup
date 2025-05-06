import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./db/Dbconnection.js"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
db(); // Call the database connection function
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});