const express = require('express');
const router = express.Router();
const employee = require('../models/employees')
router.get('/', (req, res) => {
    employee.find().then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
router.get('/:ID', (req, res) => {
    employee.findById(req.params.ID).then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
router.post('/', (req, res) => {
    const emp = new employee({
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        salary: req.body.salary
    });
    emp.save().then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.delete('/:ID', (req, res) => {
    employee.remove({ _id: req.params.ID }).then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
router.patch('/:ID', (req, res) => {
    employee.updateOne({ _id: req.params.ID }, req.body).then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
module.exports = router;