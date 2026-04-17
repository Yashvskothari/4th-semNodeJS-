const productService = require('../services/productService');

//get all
exports.getProducts = (req, res) => {
    res.json(productService.getAllProducts());
};

// get by id
exports.getProduct = (req, res) => {
    const product = productService.getProductById(req.params.id);

    if(!product) {
        return res.status(404).send("Product not found");
    }
    res.json(product);
};
//post
exports.createProduct = (req, res) => {
    const product = productService.addProduct(req.body);
    res.status(201).json(product);
};
//put
exports.updateProduct = (req, res)=> {
    const product = productService.updateProduct(req.params.id, req.body);

    if(!product) {
        return res.status(404).send("Product not found");
    }

    res.json(product);
};
//delete
exports.deleteProduct = (req, res) => {
    const product = productService.deleteProduct(req.params.id);

    if(!product) {
        return res.status(404).send("Product not found");
    }

    res.json(product);
};