const linesPost = require('../models/lines/get');

module.exports = {
    getDesignerLines: (req, res) => {
        res.send(JSON.stringify([
            {"lineId": 1, "lineTitle": "Winter 2021", "lineSummary": "Belladonna Versachie Styles", "designerId": "3"}, 
            {"lineId": 2, "lineTitle": "Spring 2022", "lineSummary": "Luxury Brand Styles", "designerId": "3"},
            {"lineId": 3, "lineTitle": "August 2022", "lineSummary": "Red Bottoms Styles", "designerId": "3"},
            {"lineId": 4, "lineTitle": "Summer 2020", "lineSummary": "Summer Fall Styles", "designerId": "3"}
        ]));
    },
};