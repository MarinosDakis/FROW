const express = require("express");
const router = express.Router();

const linesController = require('../controllers/products');

router.get('/products/:designerId/:lineId', linesController.getDesignerLineProducts);

module.exports = router;