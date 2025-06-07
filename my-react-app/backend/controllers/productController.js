let products = [
  { id: 1, name: 'Keo', price: 200 },
  { id: 2, name: 'Banh cuon', price: 200 },
  { id: 3, name: 'Banh bo', price: 300 },
  { id: 4, name: 'Banh trang phoi suong', price: 10000 }
];

// @desc Get all products
// @route GET /api/products
const getProducts = (req, res, next) => {
  res.status(200).json(products);
};

// @desc Get products by search keyword
// @route GET /api/products/search
const searchProducts = (req, res, next) => {
  const keyword = req.query.keyword?.toLowerCase() || '';
  const results = products.filter(product =>
    product.name.toLowerCase().includes(keyword)
  );
  res.status(200).json(results);
};

// @desc Get products by category
// @route GET /api/products/category/:id
const getProductsByCategory = (req, res, next) => {
  const id = parseInt(req.params.id);
  const categoryProducts = products.filter(product => product.categoryId === id);
  // if (categoryProducts.length === 0) {
  //   return res.status(404).json({ message: 'No products found in this category' });
  // }
  res.status(200).json(categoryProducts);
};

// @desc Get single product
// @route GET /api/products/:id
const getProduct = (req, res, next) => {
  const id = parseInt(req.params.id);
  const product = products.find(product => product.id === id);
  if (!product) {
    const error = new Error(`Product with ID: ${id} not found`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(product);
};

// @desc Create a new product (admin only)
// @route POST /api/products
const createProduct = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || !price) {
    const error = new Error(`Name and price are required`);
    error.status = 400;
    return next(error);
  }
  const newProduct = {id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json({ product: newProduct, message: 'Product created successfully' });
};

// @desc Update a product (admin only)
// @route PUT /api/products/:id
const updateProduct = (req, res, next) => {
  const id = parseInt(req.params.id);
  // const id = parseInt(req.params.id, 10);
  const { name, price } = req.body;
  if (!name || !price) {
    const error = new Error(`Name and price are required`);
    error.status = 400;
    return next(error);
  }
  
  const index = products.findIndex(product => product.id === id);
  if (index === -1) {
    const error = new Error(`Product with ID: ${id} not found`);
    error.status = 404;
    return next(error);
  }
  
  products[index] = { id, name, price };
  res.status(200).json({ product: products[index], message: `Product with ID: ${id} updated successfully` });
}

// @desc Delete a product (admin only)
// @route DELETE /api/products/:id
const deleteProduct = (req, res, next) => {
  const id = parseInt(req.params.id);
  products = products.filter(product => product.id !== id);
  res.status(200).json({ message: `Product with ID: ${id} deleted successfully` });
};

export {
    getProducts,
    searchProducts,
    getProductsByCategory,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};