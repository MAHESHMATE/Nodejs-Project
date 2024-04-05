const mongoose = require('mongoose');

// Define the schema for the Product model
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
    slug: {
        type: String,
        unique: true
    }
});

// Create the Product model based on the schema
const Product = mongoose.model('Product', productSchema);

// Export the Product model
module.exports = Product;
