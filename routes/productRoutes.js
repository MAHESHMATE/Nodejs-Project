const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route to add a new product
router.post('/add', productController.addProduct);

// Route to get product by handle
router.get('/:getByHandle', productController.getProductByHandle);

// Route to update product
router.put('/update/:productId', productController.updateProduct);

// Route to delete product
router.delete('/delete/:productId', productController.deleteProduct);

// Route to get all products
router.get('/products', productController.getAllProducts);

// Route to add multiple products
router.post('/addProducts', productController.addMultipleProducts);

module.exports = router;
