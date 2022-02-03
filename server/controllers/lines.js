const linesPost = require('../models/lines/get');
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
    getDesignerLines: (req, res) => {

        const designerId = req.params.designerId;
        const sqlStatement = `SELECT * FROM Demo.Lines WHERE DesignerId=${designerId}`;

        sqlEstablishConnection.query(sqlStatement,function (error, results) {
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
};