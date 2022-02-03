const mysqlConnection = require('mysql');

const sqlConfiguration = {
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "frow"
}
 
const sqlEstablishConnection = mysqlConnection.createPool(sqlConfiguration);

const getAllUsers = () => {

  
  const sqlStatement = "SELECT * FROM designers";

  const query = sqlEstablishConnection.query(sqlStatement, function (error, results, fields) {
      if (error) return "ERROR";
  });


};

module.exports.getAllUsers = getAllUsers;
