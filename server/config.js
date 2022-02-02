 const sqlConfiguration = {
    host: process.env.RDS_ENDPOINT,
    user: process.env.RDS_USERNAME,
    port: process.env.RDS_PORT,
    password: process.env.RDS_PASSWORD
};
 
module.exports = sqlConfiguration;
