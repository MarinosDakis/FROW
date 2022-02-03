// import { Typography } from '@material-ui/core';
import React from 'react';
import { Grid, Paper, Box, Typography, Button } from '@material-ui/core';
import InventoryIcon from '@mui/icons-material/Inventory';
import useStyles from "./format";

export default function Success() {
const classes = useStyles();

const icon_style = {

    largeIcon: {
      width: 200,
      height: 60,
    },
  
  };

  const div_style = {
    display: "flex",
    justifyContent: "center",
  };

return(
<div style={div_style}>
    <Box className={classes.root}>
        <Paper variant="outlined" className={classes.paper}>
            <Grid className={classes.margins}>
            <Grid item className={classes.icon}>
            <InventoryIcon style={icon_style.largeIcon}/>
                </Grid>
                <Grid item className={classes.headerTop}>
                    <Button className={classes.header}>Your Purchase was Successful!</Button>
                </Grid>
                <Grid item>
                    <Typography className ={classes.Paragraph}>Thank you for your Purchase! </Typography>
                    <Typography className ={classes.Paragraph}>You will be recieving an email shortly with your confirmation number.</Typography>
                    <Typography className ={classes.Paragraph}>Expect a shipment in 2-3 Buisness days</Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.Paragraph}>If you have any questions, please reach out to _____</Typography>
                </Grid>
            </Grid>
            </Paper>
            </Box>
            </div>
)
}
