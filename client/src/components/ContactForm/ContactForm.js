import emailjs from "emailjs-com";
import React from 'react';
import { Grid, Paper, Box, Input, TextField, Typography, Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useStyles from "./styles";

export default function ContactForm() {
    const classes = useStyles();
    const navigate = useNavigate();

    const style = {
        display: "flex",
        justifyContent: "center",
    };

    const column_style = {
        marginBottom: 15
    };

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_bapyz9n', 'template_mh8amqa', e.target, 'user_I5dr4b0STfFEDZdj3Q8w5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    const goBackToAllProducts = () => {
        navigate("/products");
    }

    return (
        <Box style={style}>
            <Box style={{ paddingTop: '110px' }}>
                <Paper variant="outlined" className={classes.paper}>
                    <Typography className={classes.header}>Email Designer</Typography>
                    <Grid className={classes.grid}>
                        <form onSubmit={sendEmail} >
                            <Box>
                                <Box style={column_style} >
                                    <Input className={classes.input} type="text" name="name" placeholder="Name" name="name" />
                                </Box>
                                <Box style={column_style} >
                                    <Input className={classes.input} type="email" placeholder="Email Address" name="email" />
                                </Box>
                                <Box style={column_style}>
                                    <Input className={classes.input} type="text" placeholder="Subject" name="subject" />
                                </Box>
                                <Box style={column_style}>
                                    <TextField className={classes.textfield} multiline id="" cols="30" rows="8" placeholder="Your message" name="message" />
                                </Box>
                                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Send Message</Button>
                            </Box>
                            <Grid item xs={12}>
                                <Button onClick={goBackToAllProducts} className={classes.button} variant="contained" startIcon={<ArrowBackIcon />}>Back to Store</Button>
                            </Grid>
                        </form>
                    </Grid>
                </Paper>
            </Box>
        </Box>
    )
}