import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import EmployeeRoute from "./routes/employee.route.js";
dotenv.config();

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected successfully");
    } catch (error){
        console.error("MongoDB connection error:", error.message);
    }
}

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/employee", EmployeeRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});