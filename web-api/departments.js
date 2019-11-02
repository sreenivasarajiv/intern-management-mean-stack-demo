const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Department = new mongoose.model('Department', departmentSchema);

router.get('/', async (req, res) => {
   const departments = await Department.find();
   res.json(departments);
})

router.post('/', async (req, res) => {
    const department = new Department({
        name: req.body.name
    });
    let result = await department.save();
    res.json(result);
})

module.exports = router;