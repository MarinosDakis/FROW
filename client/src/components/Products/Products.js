import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dress from './images/dress.png';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, Box } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@material-ui/icons/Email';
import ProductShowcaseComponent from './ProductShowcaseComponent/ProductShowcaseComponent';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

import {
  setCost, setServiceLinesForPurchase, decrementCost,
  incrementCost
} from '../../store/frowSlice';

import useStyles from "./styles";

function Products() {

  const classes = useStyles();
  const dispatch = useDispatch();
  const currentDesignerId = useSelector((state) => state.frowCounter.currentDesignerId);
  const currentLineId = useSelector((state) => state.frowCounter.currentLineId);
  const currentDesignerName = useSelector((state) => state.frowCounter.currentDesignerName);
  const currentLineTitle = useSelector((state) => state.frowCounter.currentLineTitle);
  const cost = useSelector((state) => state.frowCounter.cost);
  const currentDesignerDescription = useSelector((state) => state.frowCounter.currentDesignerDescription);
  const [designerProductData, setDesignerProductData] = useState([]);
  const [retrieveDesignerLineDataError, setRetrieveDesignerLineDataError] = useState(0);
  const [loading, setLoading] = useState(0);
  const [calculateCost, setCalculateCost] = useState(0);
  const navigate = useNavigate();

  async function retrieveProductInformation() {
    let response;
    let errors = 0;
    try {
      response = await axios.get(`/frow/products/${currentDesignerId}/${currentLineId}`);
    } catch (err) {
      errors += 1;
    } finally {
      if (errors || response.data === "ERROR") {
        setRetrieveDesignerLineDataError(1);
      }
      else {
        const responseData = response.data;
        let totalAmount = 0;
        responseData.forEach((productElement) => {
          totalAmount += productElement.productPrice;
        });
        setCalculateCost(totalAmount);
        setDesignerProductData(responseData);
      }
      setLoading(0);
    }
  }

  const goBackToAllLines = () => {
    navigate("/designers");
  }

  const handleAddCart = () => {
    //TBA
  }

  useEffect(() => {
    retrieveProductInformation();
  }, []);

  return (
    <Box className={classes.root}>
      <Grid container>
        <Box className='ProductsContainer' style={{ paddingTop: '20px', margin: '0 10%' }}>

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs="auto" >
              <Typography variant="h2" style={{ fontWeight: 600, color: "white" }}>{currentLineTitle}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs="auto">
              <Typography variant="h5" style={{ color: "white" }}>Total Price: ${calculateCost}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs="auto">
              <Button className={classes.button} component={Link} to="/contactform" variant="contained" startIcon={<EmailIcon />}> Email Designer</Button>
            </Grid>
            <Grid item xs="auto">
              <Button className={classes.button} onClick={handleAddCart} variant="contained" startIcon={<ShoppingCartIcon />}>Add to Cart</Button>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            {designerProductData.map((product, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                <ProductShowcaseComponent
                  productName={product.ProductTitle}
                  productDescription={product.ProductDescription}
                  productPrice={product.ProductPrice}
                  productImg={dress} />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button onClick={goBackToAllLines} className={classes.button} variant="contained" startIcon={<ArrowBackIcon />}>Back to {currentDesignerName}'s lines</Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}

export default Products;