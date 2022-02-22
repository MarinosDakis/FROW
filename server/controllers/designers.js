const designerPost = require('../models/designers/get');
const mysqlConnection = require('mysql');

const sqlConfiguration = {
  host: "mock-project-db.cxxsoylsaete.us-east-1.rds.amazonaws.com",
  user: "Team3",
  port: 3306,
  password: "Password#$",
  database: "Demo"
}
 
const sqlEstablishConnection = mysqlConnection.createPool(sqlConfiguration);

module.exports = {
    getAll: (req, res) => {

        const sqlStatement = "SELECT * FROM Designers";

        sqlEstablishConnection.query(sqlStatement, function (error, results) {
            if (error) {
                return res.send("ERROR");
            };

            let designerResults = [];
            results.forEach((items) => {
                designerResults.push(items);
            })
     
            return res.send(JSON.stringify(designerResults));
        });

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