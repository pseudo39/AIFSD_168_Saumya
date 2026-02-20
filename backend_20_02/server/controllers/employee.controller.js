import Employee from "../models/employee.model.js";

export const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createEmployee = async (req, res) => {
    try {
        const { name, email, position } = req.body;
        const newEmployee = new Employee({ name, email, position });
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params; 
        const { name, email, position } = req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(
            id,
            { name, email, position },
            { new: true }
        );
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params; 
        await Employee.findByIdAndDelete(id);
        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }  
};