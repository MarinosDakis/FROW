import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button, Box } from '@material-ui/core'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import useStyles from "./styles";
import FrowLogo from "../../images/frow_logo.png";

const Navbar = () => {
  const classes = useStyles();

  /*
  //default user is information we stored in local storage from google sign in
  const [user, setUser] = true;
  const dispatch = useDispatch();

  const logout = () => {
      dispatch({ type: "LOGOUT" })

      // after user logs out we push them to the home route
      navigate.push("/");

      // set user to null after
      setUser(null);
  }
 
  useEffect(() => {
      const token = user?.token;

      // check if JWT token has expired

      // see if token exists
          if (token) {
              const decodedToken = decode(token);

           // if expired log user out
              if (decodedToken.exp * 1000 < new Date().getTime()){
                  logout();
              }
          }
          
      setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
*/

  //       <img src={FrowLogo} alt="logo" className={classes.image}></img>

  return (
    <AppBar className={classes.appBar}>
      <Box className={classes.brandContainer}>
        <Typography className={classes.heading} component={Link} to="/" variant="h2" align="center">FROW</Typography>
        <img src={FrowLogo} alt="logo" className={classes.image} height="60"></img>
      </Box>
      <Box>
        <Button component={Link} to="/login" variant="contained" className={classes.button}>Sign In</Button>
      </Box>
    </AppBar>
  );
};

export default Navbar