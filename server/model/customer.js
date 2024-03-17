const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    number: {
        type: String, // Assuming phone number is stored as a string
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique:true
    },
    country: {
        type: String,
        required: true
    }
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
