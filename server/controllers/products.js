const productsPost = require('../models/products/get');

module.exports = {
    getDesignerLineProducts: (req, res) => {
        res.send(JSON.stringify([
            {"lineId": 1, "designerId": "3", "productPrice": 3000, "productTitle": "Nike Sneakers", "productDescription": "You can run for miles"},
            {"lineId": 1, "designerId": "3", "productPrice": 321, "productTitle": "OnCloud running", "productDescription": "Feels like a cloud"},
            {"lineId": 1, "designerId": "3", "productPrice": 543, "productTitle": "Adidas Shoes", "productDescription": "Adidas is okay to wear"},
            {"lineId": 1, "designerId": "3", "productPrice": 1233, "productTitle": "Nike Free Runs", "productDescription": "Free runs are amazing!"},
        ]));
    },
};