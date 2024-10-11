const express = require('express');
const {getProducts, getProduct, addProducts, updateProduct, deleteProduct} =require('../controllers/productController');

const router = express.Router();

// All the Routes performing Create, Read, Update operations on Products collection in MongoDB
// Get all products from the DB
router.get('/', getProducts);

// Get product with given Id from DB
router.get('/:id', getProduct);

// Post or add Products to the DB
router.post('/', addProducts);

// Update a product with given Id and changed values in the DB
router.put('/:id', updateProduct);

// Delete a product with a given Id from the Products collection in MongoDB
router.delete('/:id', deleteProduct);

module.exports = router;