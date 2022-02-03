// import { Typography } from '@material-ui/core';
import React from 'react';
import { Grid, Paper, Box, Typography } from '@material-ui/core';
import useStyles from "./format";


export default function Success() {
const classes = useStyles();

return(

    <Box className={classes.root}>
        <Paper variant="outlined" className={classes.paper}>
            <Grid>
                <Grid item className={classes.headerTopBottom}>
                    <Typography className={classes.header}>You Purchase was Successful</Typography>
                </Grid>
                <Grid item>
                    <Typography className ={classes.Paragraph}>Thank you for your Purchase! </Typography>
                    <Typography className ={classes.Paragraph}>You will be recieving an email shortly with your confirmation number.</Typography>
                    <Typography className ={classes.Paragraph}>Expect a shipment in 2-3 Buisness days</Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.Paragraph}>If you have any questions please reach out too______</Typography>
                </Grid>
            </Grid>
            </Paper>
            </Box>
)
}
