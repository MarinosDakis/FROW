import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Data from './data.json';
import dress from './images/dress.png';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, Box } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import EmailIcon from '@material-ui/icons/Email';
import ProductShowcaseComponent from './ProductShowcaseComponent/ProductShowcaseComponent';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {setCost, setServiceLinesForPurchase, decrementCost,
  incrementCost} from '../../store/frowSlice';

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
   
  async function retrieveProductInformation(){
      let response;
      let errors = 0;
      try{
          response = await axios.get(`/frow/products/${currentDesignerId}/${currentLineId}`);
      } catch(err){
          errors += 1;
      } finally {
          if(errors || response.data === "ERROR"){
              setRetrieveDesignerLineDataError(1);
          }
          else{
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
   
  useEffect(() => {
      retrieveProductInformation();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
          <Button component={Link} to="/contactform" className={classes.root} style={{marginTop: '110px'}} variant="contained" startIcon={<ArrowBackIcon />}>Back to {currentDesignerName}'s lines</Button>
      </Grid>
      <Box className='ProductsContainer' style={{ paddingTop: '20px', margin: '0 10%'}}>

        <Grid container spacing={2} alignItems="center" justifyContent="center" style={{paddingTop: '5%'}}>
          <Grid item xs="auto" >
            <Typography variant="h2" style={{ fontWeight: 600 }}>{currentLineTitle}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center" justifyContent="center" style={{paddingTop: '10px'}}>
          <Grid item xs="auto">
            <Button component={Link} to="/contactform" className={classes.root} variant="contained" startIcon={<EmailIcon />}> Email Designer</Button>
          </Grid>
          <Grid item xs="auto">
            <Button className={classes.root} variant="contained" startIcon={<CreditCardIcon />}> Purchase Line</Button>
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center" justifyContent="left" style={{paddingTop: '25px', paddingBottom: '10px'}}>
          <Grid item xs="auto">
            <Typography variant="h5"><b>Total Price:</b> ${calculateCost}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {designerProductData.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
              <ProductShowcaseComponent
                productName={product.productTitle}
                productDescription={product.productDescription}
                productPrice={product.productPrice}
                productImg={dress} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
}

export default Products;