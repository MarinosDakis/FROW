const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
const path = require("path");

const dotenv = require('dotenv');
dotenv.config();
 
const designerRoutes = require('./routes/designers');
const lineRoutes = require('./routes/lines');
const productRoutes = require('./routes/products');


app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/frow', designerRoutes);
app.use('/frow', lineRoutes);
app.use('/frow', productRoutes);

app.listen(port, () => {
    console.log("Listening on port 5000");
});
