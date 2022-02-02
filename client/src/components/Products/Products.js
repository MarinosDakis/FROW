import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Data from './data.json';
import dress from './images/dress.png';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import EmailIcon from '@material-ui/icons/Email';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpandMore } from '@material-ui/icons';

function Products() {

  const [expandedPanel, setExpandedPanel] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    console.log({ event, isExpanded });
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <div className='ProductsContainer' style={{ paddingTop: '110px' }}>
      <div className='TopBanner'>
        <Grid container spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center">

          <Grid item xs="auto" direction="row">
            <Button variant="contained" startIcon={<EmailIcon />}> Email Designer</Button>
          </Grid>
          <Grid item xs="auto" direction="row">
            <Button variant="contained" startIcon={<CreditCardIcon />}> Purchase Line</Button>
          </Grid>
        </Grid>

        <Grid container spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center">
          <Grid item xs="auto" >
            <h3 style={{ fontWeight: "bold" }}>Fashion Line Name</h3>
          </Grid>

        </Grid>

        <Grid container spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center">

          <Grid item xs="auto">
            <p style={{ fontWeight: "bold" }}>Total Price: </p>
          </Grid>
        </Grid>
      </div>

      <Grid container spacing={3}>
        {Data.map(product => (
          <Grid item key={product.id} xs={3} >
            <Card sx={{ maxWidth: 345 }} >
              <CardMedia
                component="img"
                height="100%"
                image={dress}
                alt="dress"
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div" style={{ fontWeight: "bold" }}>
                  {product.title}
                </Typography>

                <Accordion expanded={expandedPanel === 'panel1'} onChange={handleAccordionChange('panel1')}>

                  <AccordionSummary expandIcon={<ExpandMore />}>
                    Description
                  </AccordionSummary>

                  <AccordionDetails>
                  {product.desc}
                  </AccordionDetails>

                </Accordion>






              </CardContent>
              <CardActions>
                <Button style={{ fontWeight: "bold" }} size="small">${product.price}</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;