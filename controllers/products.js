const productModel = require("../models/Proudct.js");
const GenericMethods = require("../models/generic.js");

const productMethods = new GenericMethods(productModel);

const indexController = async (req, res) => {
  const products = await productMethods.getAll();
  res.status(200).render("products", { products });
};

const renderCreateView = async (req, res) => {
  res.status(200).render("products/create");
};

const createProduct = async (req, res) => {
  const data = req.body;
  await productMethods.create(data);
  res.status(200).redirect("/products");
};
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  //console.log(id);
  try {
    const product =  await productMethods.delete(id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
  }
  res.status(200).json({ success: true, message: 'Product deleted successfully' });
} catch (error) {
  res.status(500).json({ success: false, message: 'Server Error' });
}
};



const renderUpdateView = async (req,res) =>{
  try {
    const productId = req.params.id;
    const product = await productMethods.getById(productId);

    if (!product) {
        return res.status(404).render('404', { message: 'Product not found' });
    }

    res.render('products/update', { product }); 
} catch (error) {
    res.status(500).render('error', { message: 'Server error' });
}
};


const updateProduct= async (req,res) =>{
  try {
    const productId = req.params.id;
    const updatedData = {
        title: req.body.title,
        description: req.body.description,
        stock: req.body.stock,
        expired: req.body.expired === 'false'
    };

    const product = await productMethods.update(productId, updatedData);
    if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json({ success: true, product });
} catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
}
};

module.exports = {
  indexController,
  renderCreateView,
  createProduct,
  deleteProduct,
  updateProduct,
  renderUpdateView,
};
