import React, { useState, useEffect } from 'react';
import { Grid, Paper, Box, Typography, Card, Divider } from '@material-ui/core';
import Errors from './Errors';
import Success from './Success';
import Input from '../Login/Input';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useStyles from "./styles";
import { Button } from '@material-ui/core';

function Payments() {

    const column_style = {
        marginBottom: 15
    };

    const div_style = {
        display: "grid",
        justifyContent: "center",
    };

    const [lineData, setLineData] = useState(null);
    const [cardData, setCardData] = useState({ cardNumber: "", expDate: "", csv: "" });
    const [SuccessPageValue, setSuccessPageValue] = useState(false);
    const classes = useStyles();
    var errors = [];

    const handleChange = (e) => {
        setCardData({ ...setCardData, [e.target.name]: e.target.value });
    };

    const handleSuccessPageValue = () => setSuccessPageValue((SuccessPageValue) => !SuccessPageValue);

    const dummyData = { lineName: "Example Line", linePrice: "300", lineQuantity: "10" }

    useEffect(() => {
        setLineData(dummyData);
    }, []);

    if (lineData === null) return null;

    const isValid = (e) => {

        let errorCount = 0;

        // REGEX for credit card info
        let regex = /(\\b\\d{4}\\s\\d{4}\\s\\d{4}\\s\\d{4}\\b)/;
        if (!regex.test(cardData.cardNumber)) {
            errors.push("Invalid Credit Card Number");
            errorCount++;
        }

        // REGEX for credit card expiration info
        regex = /^(?:0?[1-9]|1[0-2]) *\/ *[1-9][0-9]$/
        if (!regex.test(cardData.cardNumber)) {
            errors.push("Invalid Expiration date");
            errorCount++;
        }

        // REGEX for credit card csv
        regex = /^(?:0?[1-9]|1[0-2]) *\/ *[1-9][0-9]$/
        if (!regex.test(cardData.cardNumber)) {
            errors.push("Invalid csv");
            errorCount++;
        }

        // if there's errors return false, otherwise return true
        if (errorCount > 0) return false;
        if (errorCount) return true;

    }

    return (
        <Box className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                <Grid container spacing={2} style={{marginBottom: 15}}>
                    <Grid item xs={12}>
                        <Box textAlign="center" className={classes.brandContainer}>
                            <Typography className={classes.text} variant='h4'>{dummyData.lineName}</Typography>
                            <ShoppingCartIcon className={classes.svg} />
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <Typography className={classes.text} variant='h6'>{`Price: $${dummyData.linePrice}`}</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography className={classes.text} variant='h6'>{`Quantity: ${dummyData.lineQuantity}`}</Typography>
                    </Grid>
                </Grid>

                <Grid className={classes.grid}>
                    <form className={classes.form} onSubmit={console.log(isValid())}>
                        <Grid container spacing={2}>
                            {errors.length > 0 && <Errors className={classes.alert} errors={errors} />}
                            <Input name="creditCardNumber" label="Credit Card Number" handleChange={handleChange} autoFocus />
                            <Input name="creditCardCSV" label="CSV" handleChange={handleChange} type="password" half />
                            <Input name="creditCardExp" label="MM/YYYY" handleChange={handleChange} half />
                            <Button style={{backgroundColor: "black"}} type="submit" variant='contained' fullWidth color="primary" className={classes.submit}>Purchase</Button>
                        </Grid>
                    </form>
                </Grid>
            </Paper>
        </Box>
    );

}
export default Payments;
