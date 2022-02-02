const express = require("express");
const router = express.Router();

const designerController = require('../controllers/designers');

router.get('/designers', designerController.getAll);
router.get('/designers/:designerId', designerController.getId);
router.post('/designers', designerController.post);
router.put('/designers', designerController.put);
router.delete('/designers/:designerId', designerController.delete);

module.exports = router;