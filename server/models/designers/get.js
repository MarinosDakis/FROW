const mysqlConnection = require('mysql');
const sqlConfiguration = require('../../config');

const sqlEstablishConnection = mysqlConnection.createConnection(sqlConfiguration);

const getAllUsers = () => {
    sqlEstablishConnection.connect(function(err) {
        if (err) {
          console.error('Database connection failed: ' + err.stack);
          return "ERROR";
        }
      
        return "SUCCESS";
      });
      
      sqlEstablishConnection.end();
};

module.exports.getAllUsers = getAllUsers;
