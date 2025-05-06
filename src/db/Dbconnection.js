import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(" MongoDB database connected successfully");
  } catch (error) {
    console.error(" MongoDB connection error:", error.message);
    
  }
};

export default db;
