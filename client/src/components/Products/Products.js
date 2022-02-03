import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Data from './data.json';
import dress from './images/dress.png';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, Box } from '@material-ui/core';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import EmailIcon from '@material-ui/icons/Email';
import ProductShowcaseComponent from './ProductShowcaseComponent/ProductShowcaseComponent';
import { Link } from "react-router-dom";

import useStyles from "./styles";

function Products() {

  const classes = useStyles();

  return (
    <Box className='ProductsContainer' style={{ paddingTop: '110px' }}>

      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs="auto">
          <Button component={Link} to="/contactform" className={classes.root} variant="contained" startIcon={<EmailIcon />}> Email Designer</Button>
        </Grid>
        <Grid item xs="auto">
          <Button className={classes.root} variant="contained" startIcon={<CreditCardIcon />}> Purchase Line</Button>
        </Grid>
      </Grid>

      <Grid className={classes.root} container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs="auto" >
          <Typography variant="h1" style={{ fontWeight: 600 }}>Fashion Line Name</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs="auto">
          <Typography variant="h4" style={{ color: "white" }}>Total Price: </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {Data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductShowcaseComponent
              productName={product.title}
              productDescription={product.desc}
              productPrice={product.price}
              productImg={dress} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Products;