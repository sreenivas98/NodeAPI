//import the product model for reference to the schema of the collection
const Product = require('../models/productModel');

//import express-async-handler to pass the the response form async functions to our custom middleware
const asyncHandler = require('express-async-handler');

//get all the products in the collection
const getProducts = asyncHandler(async(req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

//get a product using the ID provided by user
const getProduct = asyncHandler(async(req,res) => {
    try {
        const {id} =req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

//create and a new product to the Products collection
const addProducts = asyncHandler(async(req,res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

//search and update a product based on the ID and given body of parameters by the user 
const updateProduct = asyncHandler(async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product) {
            res.status(404);
            throw new Error(`Cannot find any product with given Id ${id}`);
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

//delete a product having the provided ID
const deleteProduct = asyncHandler(async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product) {
            res.status(404);
            throw new Error(`Cannot find any product with given Id ${id}`);
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

module.exports = {
    getProducts,
    getProduct,
    addProducts,
    updateProduct,
    deleteProduct
}