import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    position:{
        type: String,
        required: true,
        default: "Employee",
    },
})
const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;

