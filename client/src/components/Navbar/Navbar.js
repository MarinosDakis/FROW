import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button, Box } from '@material-ui/core'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import useStyles from "./styles";
import FrowLogo from "../../images/frow_logo.png";
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Navbar = () => {

  const classes = useStyles();
  const itemsPurchased = useSelector((state) => state.frowCounter.itemsPurchased);
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
        <Typography className={classes.heading} component={Link} to="/" variant="h3" align="center">FROW</Typography>
        <img src={FrowLogo} alt="logo" className={classes.image} height="60"></img>
      </Box>
      <Box>
        <Button component={Link} to="/" variant="contained" style={{marginRight: '10px'}} className={classes.button}>Designers</Button>
        <Button component={Link} to="/login" variant="contained" className={classes.button}>Sign In</Button>
        <IconButton component={Link} to="/payment" style={{marginLeft: '8px', color: 'black'}} aria-label="cart">
            <StyledBadge badgeContent={itemsPurchased} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
      </Box>
    </AppBar>
  );
};

export default Navbar