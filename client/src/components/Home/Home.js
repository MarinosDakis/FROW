import React, { useState, useEffect } from 'react';
import { Grid, Paper, Box, Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import {useDispatch} from 'react-redux';
import {setCurrentDesignerId, setCurrentDesignerName, 
  setCurrentDesignerDescription} from '../../store/frowSlice';
import ProfileBoxComponent from './ProfileBoxComponent/ProfileBoxComponent.js';
import { Navigate } from "react-router-dom";
import useStyles from "./styles";
import CircularProgress from '@mui/material/CircularProgress';
 
const axios = require('axios');

export default function Home() {

  const [designerData, setDesignerData] = useState([]);
  const [loading, setLoading] = useState(0);
  const [retrieveDesignerDataError, setRetrieveDesignerDataError] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  async function getDesigners(){
      let response;
      let errors = 0;
      try{
          response = await axios.get("/frow/designers");
          console.log(response);
      } catch(err){
          errors += 1;
      } finally {
          if(errors || response.data === "ERROR"){
              setRetrieveDesignerDataError(1);
          }
          else{
              const responseData = response.data;
              setDesignerData(responseData);
          }
          setLoading(0);
      }
  }

  useEffect(() => {
      setRetrieveDesignerDataError(0);
      setLoading(1);
      getDesigners();
  }, []);
   
  function viewDesigner(id, description, name){
      dispatch(setCurrentDesignerId(id));
      dispatch(setCurrentDesignerDescription(description));
      dispatch(setCurrentDesignerName(name));
      <Navigate to='/designers'/>
  }

  return (
    <Box className={classes.root}>
      <Paper variant="outlined" className={classes.paper}>
        <Grid>
          <Grid item className={classes.headerTopBottom}>
            <Typography className={classes.header}><b>Nashville Fashion Week</b></Typography>
            <Typography className={classes.header2}>Saturday, 6pm EST</Typography>
          </Grid>
          <Grid item>
            <Divider className={classes.root} style={{marginTop: '0'}} />
          </Grid>
          {loading? <Grid container spacing={2} style={{marginTop: '25px', marginBottom: '1px'}} className={classes.grid}><Grid className={classes.loadContainer} container><Grid item xs={12}><CircularProgress sx={{color: '#7e7878'}}/></Grid></Grid></Grid>:
          <Grid container>
          {designerData.length === 0 || retrieveDesignerDataError? <Typography className={classes.header4}>No Designers</Typography>:
          <Grid container>
          <Grid item xs={12}>
            <Box className={classes.headerTopMid} style={{textAlign: 'center'}}>
              <Typography className={classes.header3}>Meet the Designers...</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} className={classes.grid}>
                {designerData.map((data, index) => (
                    <Grid onClick={() => viewDesigner(data.DesignerId, data.Summary, data.Designer)} item className={classes.grid} key={index} xs={12} sm={12} md={6} lg={6}>
                      <ProfileBoxComponent name={data.Designer} />
                    </Grid>
                ))} 
            </Grid></Grid>
          </Grid>}</Grid>}
        </Grid>
      </Paper>
    </Box>
  )

}

