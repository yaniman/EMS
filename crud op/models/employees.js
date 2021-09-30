const { Long } = require("bson");
const mongoose = require("mongoose");
const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model('employee', employeeSchema);