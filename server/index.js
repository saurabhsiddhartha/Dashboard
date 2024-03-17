const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Customer = require('./model/customer.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 500;

mongoose.connect('mongodb://127.0.0.1:27017/admin')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(() => {
        console.log('Internal Error...');
    });

    app.get('/' , (req,res) =>{
        res.send('hello')
    })
    app.get('/customers', async (req, res) => {
        try {
            const customers = await Customer.find();
            res.json(customers);
        } catch (error) {
            console.error('Error fetching customers:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    });

app.post('/register', (req, res) => {
    console.log(req.body);
    Customer.create(req.body)
    console.log('done') 
});


app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
});
