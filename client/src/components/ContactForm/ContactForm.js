import emailjs from "emailjs-com";
import React from 'react';
import { Grid, Paper, Box, Input, TextField, Typography } from '@material-ui/core';
import useStyles from "./styles";

export default function ContactForm() {
    const classes = useStyles();

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

    return (
        <div style={style}>
            <Box style={{ paddingTop: '110px' }}>
                <Paper variant="outlined" className={classes.paper}>
                <Typography className={classes.header}>Email Designer</Typography>
                    <Grid className={classes.grid}>
                        
                        <form onSubmit={sendEmail} >
                            <div>
                                <div style={column_style} >
                                    <Input className={classes.input} type="text" name="name" placeholder="Name" name="name" />
                                </div>
                                <div style={column_style} >
                                    <Input className={classes.input} type="email" placeholder="Email Address" name="email" />
                                </div>
                                <div style={column_style}>
                                    <Input className={classes.input} type="text" placeholder="Subject" name="subject" />
                                </div>
                                <div style={column_style}>
                                    <TextField className={classes.textfield} multiline id="" cols="30" rows="8" placeholder="Your message" name="message" />
                                </div>
                                <div style={column_style} >
                                    <Input type="submit" value="Send Message" />
                                </div>
                            </div>
                        </form>
                    </Grid>
                </Paper>
            </Box>
        </div>
    )
}