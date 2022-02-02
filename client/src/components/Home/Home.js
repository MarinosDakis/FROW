import React from 'react';
import { Grid, Paper, Box, Typography } from '@material-ui/core';
//import Divider from '@mui/material/Divider';
import ProfileBoxComponent from './ProfileBoxComponent/ProfileBoxComponent.js';
import { dummyData } from './dummyData.js'

import useStyles from "./styles";

export default function Home() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper variant="outlined" className={classes.paper}>
        <Grid>
          <Grid item className={classes.headerTopBottom}>
            <Typography className={classes.header}>Nashville Fashion Week</Typography>
            <Typography className={classes.header}>Saturday, 6pm EST</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2} className={classes.grid}>
              {dummyData.map((data, index) => (
                <Grid item className={classes.grid} key={index} xs={12} sm={12} md={6} lg={6}>
                  <ProfileBoxComponent name={data.designer} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )

}

