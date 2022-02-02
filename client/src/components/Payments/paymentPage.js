//import React from 'react';
import { Grid, Paper, Box, Typography } from '@material-ui/core';
import useStyles from "./PayFormat";
//import { Typography } from '@mui/system';
import React, { Component } from 'react';
//import { rootShouldForwardProp } from '@mui/material/styles/styled';


class PayFormat extends Component {
    classes = useStyles();
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
    //const classes = useStyles();
    render ()
    {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const classes = useStyles();
        return (
            
            
    
    <Box className={classes.root}>
            <Paper variant="outlined" className={classes.paper}>
        <Grid>
            <Grid item>
                <Typography className={classes.Box1}>Spring......
                    </Typography>
                </Grid>
    
            <Grid item className ={classes.Box2}>
                Items:
            </Grid>
            <Grid item className ={classes.Box3}>
                Total:
            </Grid>
            <Grid item className ={classes.Box5}>
                Enter Payment Details
            </Grid>
            <Grid items className={classes.Box4}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            
            </Grid>
            </Grid>
    </Paper>
    </Box>
       );
    }
}

    export default PayFormat;


/*<typography className={classes.Box4}>
            
<input type="text" value={this.state.value} onChange={this.handleChange} />

</typography>
   //<input type="text" value={this.state.value} onChange={this.handleChange} />
w*/
    
