const express = require('express');
const route = express.Router();
const Foodie = require('../models/food_models.js');
const {getFood, getFoods, createFood, updateFood, deleteFood} = require("../controller/food.controller.js");

route.get ('/', getFoods);
route.get ('/:id', getFood);
route.post ('/:id', createFood);
route.put ('/:id', updateFood);
route.delete ('/:id', deleteFood);

module.exports = route;

