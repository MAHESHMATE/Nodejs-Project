// Importing necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Create an instance of Express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use('/category', categoryRoutes);

// Connect product routes
app.use('/product', productRoutes);

// POST endpoint to create a new category
app.post('/category/add', (req, res) => {
    const category = req.body;
    res.status(200).json({ message: 'Category created successfully' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Connect database
const MONGODB_URI = 'mongodb://localhost:27017/node';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Graceful shutdown
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${server.address().port}`);
});

process.on('SIGINT', () => {
    console.log('SIGINT received. Closing server gracefully...');
    server.close(() => {
        console.log('Server closed.');
        process.exit(0);
    });
});

// GET endpoint to retrieve all categories
app.get('/category/all', (req, res) => {
    const categories = [];
    res.status(200).json(categories);
});
