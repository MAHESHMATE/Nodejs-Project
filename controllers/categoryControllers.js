const categoryService = require('../services/categoryService');

// Controller function to add a new category
exports.addCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const category = await categoryService.addCategory(name, description);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to get all categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
