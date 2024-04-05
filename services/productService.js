const Product = require('../models/product');

// Function to add a new product
exports.addProduct = async (productData) => {
    try {
        const product = new Product(productData);
        await product.save();
        return product;
    } catch (error) {
        throw new Error('Failed to add product');
    }
};

// Function to get product by handle
exports.getProductByHandle = async (handle) => {
    try {
        const product = await Product.findOne({ slug: handle });
        return product;
    } catch (error) {
        throw new Error('Failed to get product by handle');
    }
};

// Function to update product
exports.updateProduct = async (productId, newData) => {
    try {
        const product = await Product.findByIdAndUpdate(productId, newData, { new: true });
        return product;
    } catch (error) {
        throw new Error('Failed to update product');
    }
};

// Function to delete product
exports.deleteProduct = async (productId) => {
    try {
        await Product.findByIdAndDelete(productId);
    } catch (error) {
        throw new Error('Failed to delete product');
    }
};

// Function to get all products
exports.getAllProducts = async (query, sort, limit, page) => {
    try {
        // Calculate skip value for pagination
        const skip = (page - 1) * limit;

        // Query products based on filtering parameters
        const productsQuery = Product.find(query)
            .sort(sort)
            .skip(skip)
            .limit(limit);

        // Execute query and retrieve products
        const products = await productsQuery.exec();

        return products;
    } catch (error) {
        throw new Error('Failed to retrieve products');
    }
};

// Function to add multiple products
exports.addMultipleProducts = async (productsData) => {
    try {
        const insertedProducts = await Product.insertMany(productsData);
        return insertedProducts;
    } catch (error) {
        throw new Error('Failed to add multiple products');
    }
};