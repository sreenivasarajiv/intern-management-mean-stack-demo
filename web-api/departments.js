const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Department = mongoose.model('Department', departmentSchema);

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

router.put('/:id', async (req, res) => {
    const department = await Department.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
    res.json(department);
})

router.delete('/:id', async (req, res) => {
    const department = await Department.findByIdAndDelete(req.params.id);
    res.json(department);
})

module.exports = router;