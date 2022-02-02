//const designerPost = require('../models/designers/get/getAll');

module.exports = {
    getAll: (req, res) => {
        console.log(designerPost());
        res.send(JSON.stringify([
            {"id": 1, "designerName": "Belladonna Versachie", "designerDescription": "Italian Designer"}, 
            {"id": 2, "designerName": "Gucci", "designerDescription": "Luxury Brand"},
            {"id": 3, "designerName": "Ballenciaga", "designerDescription": "Red Bottoms"},
            {"id": 4, "designerName": "Wera Yang", "designerDescription": "English Designer"}
        ]));
    },
    getId: (req, res) => {
        res.send(JSON.stringify(
            {"id": 1, "designerName": "Belladonna Versachie", "designerDescription": "Italian Designer"}, 
        ));
    },
    post: (req, res) => {
        res.send("Post call");
    },
    put: (req, res) => {
        res.send("Post call");
    },
    delete: (req, res) => {
        res.send("Post call");
    },
};