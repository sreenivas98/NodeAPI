// 
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// All the Routes performing Create, Read, Update operations on Products collection in MongoDB
// Get all products from the DB
app.get('/products', async(req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

// Get product with given Id from DB
app.get('/products/:id', async(req,res) => {
    try {
        const {id} =req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

// Post or add Products to the DB
app.post('/products', async(req,res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

// Update a product with given Id and changed values in the DB
app.put('/products/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product) {
            return res.status(404).json({message: `Cannot find any product with given Id ${id}`});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

// Delete a product with a given Id from the Products collection in MongoDB
app.delete('/products/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product) {
            return res.status(404).json({message: `Cannot find any product with given Id ${id}`});
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://root:0804@sreenivas98api.jnz7t.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Sreenivas98API')
.then(()=> {
    app.listen(3000, ()=> {
        console.log("Node API app is running on port 3000");
    });
    console.log("Connected to MongoDB");
}).catch(()=>{
    console.log("Error correcting to MongoDB");
});