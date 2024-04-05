const productService = require('../services/productService');

// Controller function to add a new product
exports.addProduct = async (req, res) => {
    try {
        const product = await productService.addProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to get product by handle
exports.getProductByHandle = async (req, res) => {
    try {
        const product = await productService.getProductByHandle(req.params.getByHandle);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to update product
exports.updateProduct = async (req, res) => {
    try {
        const product = await productService.updateProduct(req.params.productId, req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to delete product
exports.deleteProduct = async (req, res) => {
    try {
        await productService.deleteProduct(req.params.productId);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to get all products
exports.getAllProducts = async (req, res) => {
    try {
        const { page = 1, limit = 10, sortBy, sortOrder, category } = req.query;

        // Parse limit and page parameters
        const parsedLimit = parseInt(limit);
        const parsedPage = parseInt(page);

        // Construct query object based on filtering parameters
        const query = {};
        if (category) {
            query.categoryId = category;
        }

        // Construct sort object based on sorting parameters
        const sort = {};
        if (sortBy) {
            sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
        }

        // Call service function to retrieve paginated, filtered, and sorted products
        const products = await productService.getAllProducts(query, sort, parsedLimit, parsedPage);

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to add multiple products
exports.addMultipleProducts = async (req, res) => {
    try {
        const products = await productService.addMultipleProducts(req.body.products);
        res.status(201).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
