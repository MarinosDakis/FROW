//  const sqlConfiguration = {
//     host: process.env.RDS_ENDPOINT,
//     user: process.env.RDS_USERNAME,
//     port: process.env.RDS_PORT,
//     password: process.env.RDS_PASSWORD
// };
const sqlConfiguration = {
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "frow"
}
 
module.exports = sqlConfiguration;
