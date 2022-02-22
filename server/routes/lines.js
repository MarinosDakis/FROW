const express = require("express");
const router = express.Router();

const linesController = require('../controllers/lines');

router.get('/lines/:designerId', linesController.getDesignerLines);

module.exports = router;