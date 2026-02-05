// import library express 
const express = require ('express'); 
// import mongoose (for connect to MangoDB)
const mongoose = require('mongoose');
// import  models file 
const Foodie = require('./models/food_models.js');
// create app / server 
const app = express();

// middleware, for read source json from client
app.use(express.json());
// middleware, for read url from client
app.use(express.urlencoded({extended: true}));

// get one data by id from database
app.get('/food/:id', async (req, res) => {
    try{
        const {id} = req.params
        const foods = await Foodie.findById(id);
        res.status(200).json(foods);
    } catch (error){
        res.status(500).json({message: error.messsage});
    }
});

// get the data from database
app.get('/food', async (req, res)=> {
    try{
        // find = get all food from database
        const food = await Foodie.find({});
        res.status(200).json(food);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

// route post via body
app.post('/food', async (req, res)=>{
    try{
        // foodies variable save import models file (Foodie)
        // , create Database 
        const food = await Foodie.create(req.body);
        // if succesed
        res.status(200).json(food);
    } catch (error){
        res.status(500).json({message: error.message});
    }
});

// update data
app.put('/food/:id', async (req, res)=>{
    try{
        const{id} = req.params;
        const food = await Foodie.findByIdAndUpdate(id, req.body);
        // condition when the ID not found
        if (!food){
            // stop the execution
            return res.status(404).json({message: "Food Not Found"});
        }
        const updatedFood = await Foodie.findById(id);
        res.status(200).json(updatedFood);
    } catch (error){
        res.status(500).json({message: error.message});
    }
});

// delete data
app.delete('/food/:id', async (req, res)=>{
    try {
        const {id} = req.params ;
        const food = await Foodie.findByIdAndDelete(id);
        if (!food){
            return res.status(404).json({message: "Food Not Found"});
        }
        res.status(200).json({message: "Food Has Been Deleted"});
    } catch (error) {
        res.status(500).json({message: error.message});

    }
});

// open server to port
// app.listen(3000, () => {
//         console.log('Server is running on port 3000');
// });

// receive get request from client via URL
app.get('/', (req, res) => {
    // res.send dan res.rediqrect gabisa digunakan barengan karena
    // hanya butuh satu respons dari server.
    res.send("Hi All");
    // res.redirect("https://media.istockphoto.com/id/1443562748/id/foto/kucing-jahe-lucu.jpg?s=612x612&w=0&k=20&c=g--RaRzUgk83osyJGx88ZtoChTk3VzP8n86EQHvc7Ko=");
});

// connect to MongoDB, with using our cluster
mongoose.connect("mongodb+srv://tinymoshie:HJoMbH84qooRQcom@backend.cgyi5ja.mongodb.net/?appName=backend")
.then(()=>{
    console.log("Succes connect to mangoDB");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(()=>{
    console.log("FAILED");
});