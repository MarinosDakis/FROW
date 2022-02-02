const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;

require('dotenv/config');
 
const designerRoutes = require('./routes/designers');

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/frow', designerRoutes);

app.listen(port, () => {
    console.log("Listening on port 5000");
});
