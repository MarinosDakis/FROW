const mysqlConnection = require('mysql');

const sqlConfiguration = {
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "frow"
}
 
const sqlEstablishConnection = mysqlConnection.createPool(sqlConfiguration);
 
module.exports = sqlEstablishConnection;
