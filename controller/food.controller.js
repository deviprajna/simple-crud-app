const Foodie = require('../models/food_models');

// get one data by id from database
const getFood = async (req, res) => {
    try {
        const { id } = req.params
        const food = await Foodie.findById(id);
        res.status(200).json(food);
    } catch (error) {
        res.status(500).json({ message: error.messsage });
    }
};

// get the data from database
const getFoods = async (req, res) => {
    try {
        // find = get all food from database
        const foods = await Foodie.find({});
        res.status(200).json(foods);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// post (Add data)
const createFood = async (req, res) => {
    try {
        // foodies variable save import models file (Foodie)
        // , create Database 
        const food = await Foodie.create(req.body);
        // if succesed
        res.status(200).json(food);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// update data
const updateFood = async (req, res) => {
    try {
        const { id } = req.params;
        const food = await Foodie.findByIdAndUpdate(id, req.body);
        // condition when the ID not found
        if (!food) {
            // stop the execution
            return res.status(404).json({ message: "Food Not Found" });
        }
        const updatedFood = await Foodie.findById(id);
        res.status(200).json(updatedFood);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// delete data
const deleteFood = async (req, res) => {
    try {
        const { id } = req.params;
        const food = await Foodie.findByIdAndDelete(id);
        if (!food) {
            return res.status(404).json({ message: "Food Not Found" });
        }
        res.status(200).json({ message: "Food Has Been Deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
};

module.exports = {
    getFood,
    getFoods,
    createFood,
    updateFood,
    deleteFood
};