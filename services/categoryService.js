
exports.addCategory = async (name, description) => {
    try {
        const category = new Category({ name, description });
        await category.save();
        return category;
    } catch (error) {
        throw new Error('Failed to add category');
    }
};


exports.getAllCategories = async () => {
    try {
        const categories = await Category.find();
        return categories;
    } catch (error) {
        throw new Error('Failed to retrieve categories');
    }
};
