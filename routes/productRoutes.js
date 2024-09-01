const express = require("express");
const router = express.Router();
const controller = require("../controllers/products.js");

const base = "/products";
router.get(base, controller.indexController);
router.get(`${base}/create`, controller.renderCreateView);
router.post(`${base}/create`, controller.createProduct);
router.delete(`${base}/delete/:id`, controller.deleteProduct);
router.get(`${base}/:id/update`, controller.renderUpdateView);
router.put(`${base}/:id/update`,controller.updateProduct);
module.exports = router;
