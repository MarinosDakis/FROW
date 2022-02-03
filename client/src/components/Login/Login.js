import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from "react-google-login";
//import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Icon from "./icon";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";
//import { signin, signup } from '../../actions/auth';

const Login = () => {

    const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState)
    //const dispatch = useDispatch();
    const history = useNavigate();

    // function changes the state of show password from on --> off and vice versa
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignup) {
            // we pass formdata so we can store info in database, and history so we can navigate once something happens
            //dispatch(signup(formData, history));
        } else {
            //dispatch(signin(formData, history));
        }
    };

    const handleChange = (e) => {
        // this sets the values for all of the information from form data. All values have to use the same handlesubmit function and can work for unlimited fields
        setFormData( { ...formData, [e.target.name]: e.target.value })
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            //dispatch({ type: "AUTH", data: { result, token } });
            // after dispatching we redirect back to home
            history.push("/");
        } catch (error) {
            console.log(error);
        }

    };

    const googleFailure = () => {
        console.log("Google Sign In was unsuccessful. Try Again Later");
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    };

    return (
       <Container component="main" maxWidth="xs" className={classes.margin}>
           <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />           
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" autoFocus />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>

                    <GoogleLogin 
                        clientId="316697830976-75d94nmnc68439delfdj7fkfcrn4hp51.apps.googleusercontent.com"
                        render={(renderProps) => (
                          <Button 
                            className={classes.googleButton} 
                            color="primary" 
                            fullWidth onClick={renderProps.onClick} 
                            disabled={renderProps.disabled} 
                            startIcon={<Icon />} 
                            variant="contained"
                          >
                             Google Sign In 
                          </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Button onClick={switchMode}>
                               { isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up!"} 
                            </Button>
                        </Grid>
                    </Grid>
                </form>
           </Paper>
       </Container>
    )
}

export default Login