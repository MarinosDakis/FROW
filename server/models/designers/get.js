const mysqlConnection = require('mysql');
//const sqlConfiguration = require('../../config');

const sqlConfiguration = {
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "frow"
}


const getAllUsers = async() => {
    const sqlEstablishConnection = mysqlConnection.createConnection(sqlConfiguration);
    sqlEstablishConnection.connect(function(err) {
        if (err) {
          console.log(err);
          return "error";
        }
        else{
          console.log('connected');
        }
    });

    sqlEstablishConnection.query('show tables;', function(err,result) {
      if(err){
        console.log("query err");
        return "error";
      }
      else{
        console.log(result);
        return 'success';
      }

    });
};

module.exports.getAllUsers = getAllUsers;
