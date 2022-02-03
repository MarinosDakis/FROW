import React, { useState, useEffect } from 'react';
import { Grid, Paper, Box, Button } from '@material-ui/core';
import useStyles from "./styles";
import DesignerDisplayComponent from './DesignerDisplayComponent/DesignerDisplayComponent';
import LineInfoComponent from './LineInfoComponent/LineInfoComponent';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Navigate } from "react-router-dom";
import {setCurrentLineId, setCurrentLineTitle, 
  setCurrentLineSummary, setCurrentDesignerId, setCurrentDesignerName, 
  setCurrentDesignerDescription} from '../../store/frowSlice';
import CircularProgress from '@mui/material/CircularProgress';
 
 
const axios = require('axios');

export default function Designers() {

  const [designerLineData, setDesignerLineData] = useState([]);
  const [loading, setLoading] = useState(0);
  const dispatch = useDispatch();
  const [retrieveDesignerLineDataError, setRetrieveDesignerLineDataError] = useState(0);
  const currentDesignerId = useSelector((state) => state.frowCounter.currentDesignerId);
  const currentDesignerName = useSelector((state) => state.frowCounter.currentDesignerName);
  const currentDesignerDescription = useSelector((state) => state.frowCounter.currentDesignerDescription);
  const classes = useStyles();
   
  async function retrieveDesignerLines(){
        let response;
        let errors = 0;
        try{
            response = await axios.get(`/frow/lines/${currentDesignerId}`);
        } catch(err){
            errors += 1;
        } finally {
            if(errors || response.data === "ERROR"){
                setRetrieveDesignerLineDataError(1);
            }
            else{
                const responseData = response.data;
                setDesignerLineData(responseData);
            }
            setLoading(0);
      }
  }
   
  function selectDesignerLine(lineId, lineTitle, lineSummary){
      dispatch(setCurrentLineId(lineId));
      dispatch(setCurrentLineTitle(lineTitle));
      dispatch(setCurrentLineSummary(lineSummary));
      <Navigate to='/products'/>
  }
   
  function goBackToAllDesigners(){
      dispatch(setCurrentDesignerId(0));
      dispatch(setCurrentDesignerDescription(''));
      dispatch(setCurrentDesignerName(''));
      <Navigate to='/'/>
  }
   
  useEffect(() => {
      setLoading(1);
      setRetrieveDesignerLineDataError(0);
      retrieveDesignerLines();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
          <Button onClick={goBackToAllDesigners} className={classes.root} style={{marginTop: '110px'}} variant="contained" startIcon={<ArrowBackIcon />}>Back to All Designers</Button>
      </Grid>
      <Box className={classes.root} style={{margin: '8% 15%'}}>
          <Paper variant="outlined" className={classes.paper}>
            <Grid container>
              <Grid item xs={12}>
                <Box justifyContent="center" display="flex">
                  <DesignerDisplayComponent designerName={currentDesignerName} designerSummary={currentDesignerDescription} />
                </Box>
              </Grid>
              {loading? <Grid item xs={12}><CircularProgress /></Grid>:
              <Grid item xs={12}>
                <Grid container spacing={1} style={{paddingTop: '15px'}}>
                  {designerLineData.map((data, index) => (
                    <Grid onClick={() => selectDesignerLine(data.lineId, data.lineTitle, data.lineSummary)} item key={index} xs={12} sm={12} md={12} lg={12} sx={{ marginBottom: 10 }}>
                      <LineInfoComponent lineTitle={data.lineTitle} lineSummary={data.lineSummary} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>}
            </Grid>
          </Paper>
      </Box>
    </Grid>

  )

}

