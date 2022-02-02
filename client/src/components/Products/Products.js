import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Data from './data.json';
import dress from './images/dress.png';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import EmailIcon from '@material-ui/icons/Email';
import ProductShowcaseComponent from './ProductShowcaseComponent/ProductShowcaseComponent';

function Products() {

  return (
    <div className='ProductsContainer' style={{ paddingTop: '110px' }}>
      <div className='TopBanner'>
        <Grid container spacing={2}
          alignItems="center"
          justifyContent="center">

          <Grid item xs="auto">
            <Button variant="contained" startIcon={<EmailIcon />}> Email Designer</Button>
          </Grid>
          <Grid item xs="auto">
            <Button variant="contained" startIcon={<CreditCardIcon />}> Purchase Line</Button>
          </Grid>
        </Grid>

        <Grid container spacing={2}
          alignItems="center"
          justifyContent="center">
          <Grid item xs="auto" >
            <h3 style={{ fontWeight: "bold" }}>Fashion Line Name</h3>
          </Grid>

        </Grid>

        <Grid container spacing={2}
          alignItems="center"
          justifyContent="center">

          <Grid item xs="auto">
            <p style={{ fontWeight: "bold" }}>Total Price: </p>
          </Grid>
        </Grid>
      </div>

      <Grid container spacing={4}>
        {Data.map((product) => (
          <Grid item key={product.id} xs={4} >
            <ProductShowcaseComponent
              productName={product.title}
              productDescription={product.desc}
              productPrice={product.price}
              productImg={dress} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;