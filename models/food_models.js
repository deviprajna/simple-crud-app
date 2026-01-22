// import mongoose library
const mongoose = require('mongoose');

// create new class / field for foodproduct object
const FoodProduct = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: false,
            default: 0
        },
    },
    {
        timestamps: true
    }
);

// create model 
const Foodie = mongoose.model('Food', FoodProduct);
module.exports = Foodie;
