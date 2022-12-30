const express = require("express");
const router = express.Router();
const productsActions = require("../actions/api/productsActions");
const cors = require("cors")

router.use(cors())

router.get("/products", productsActions.getAllProducts);
router.get("/products/:id", productsActions.getProduct);
router.post("/products", productsActions.saveProduct);

module.exports = router;
