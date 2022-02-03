const designerPost = require('../models/designers/get');

module.exports = {
    getAll: (req, res) => {
        console.log(designerPost.getAllUsers());
        res.send(JSON.stringify([
            {"designerId": 1, "designerName": "Belladonna Versachie", "designerDescription": "Italian Designer"}, 
            {"designerId": 2, "designerName": "Gucci", "designerDescription": "Luxury Brand"},
            {"designerId": 3, "designerName": "Ballenciaga", "designerDescription": "Red Bottoms"},
            {"designerId": 4, "designerName": "Wera Yang", "designerDescription": "English Designer"}
        ]));
    },
    getId: (req, res) => {
        console.log(req.params.designerId);
        res.send(JSON.stringify(
            {"designerName": "Belladonna Versachie", "designerSummary": "Italian Designer"}, 
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