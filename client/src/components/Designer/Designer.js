import React from 'react';
import { Grid, Paper, Box, Typography } from '@material-ui/core';
import useStyles from "./styles";
{/*import ProfileBoxComponent from './ProfileBoxComponent/ProfileBoxComponent.js';
import { dummyData } from './dummyData.js' */}


/*
dummyData.map((data) => {
  <ProfileBoxComponent name={data.designer} />
})
*/

export default function Designer() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper variant="outlined" className={classes.paper}>
        <Grid>
          <Grid item>
            <Typography className={classes.header}>Designer</Typography>
            <Typography className={classes.header}>Description</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>

  )

}

