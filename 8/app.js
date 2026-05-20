const express = require('express');
const app = express();
const PORT = 3000;
const productRoutes = require('./routes/productRoutes');
//middleware
app.use(express.json());
//routes
app.use('/products', productRoutes);
//server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});