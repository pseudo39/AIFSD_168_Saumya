import express from 'express';
import { createEmployee, getAllEmployees, updateEmployee,deleteEmployee } from '../controllers/employee.controller.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Employee route');
});

router.get('/all', getAllEmployees);
router.post('/create', createEmployee);
router.put('/update/:id', updateEmployee);
router.delete('/delete/:id', deleteEmployee);

export default router;
