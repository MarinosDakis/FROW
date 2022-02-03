import React, { useState, useEffect } from 'react';
import { Grid, Paper, Box, Typography, Card } from '@material-ui/core';
import Errors from './Errors';
import Success from './Success';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useStyles from "./styles";
import { Button } from '@material-ui/core';

function Payments() {
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
            <Paper variant="outlined" className={classes.paper}>
                <Grid>
                    <Box justifyContent="center" display="flex">
                        <ShoppingCartIcon className={classes.svg} />
                    </Box>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography className={classes.text} variant='h4'>{dummyData.lineName}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className={classes.text} variant='h6'>{`Price: $${dummyData.linePrice}`}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className={classes.text} variant='h6'>{`Quantity: $${dummyData.lineQuantity}`}</Typography>
                    </Grid>
                </Grid>

                <Card>
                    <form autoComplete="off" noValidate onSubmit={isValid() === false && console.log("hi")}>
                        {errors.length > 0 && <Errors className={classes.alert} errors={errors} />}
                        <input name="creditCardNumber" label="Credit Card Number" value={cardData.cardNumber} type="password" onChange={handleChange} autoFocus />
                        <input name="creditCardCsv" label="CSV" value={cardData.csv} type="password" onChange={handleChange} />
                        <input name="creditCardExp" label="Confirm New Password" value={cardData.expDate} type="text" onChange={handleChange} />
                        <Button variant="contained" size="large" type="submit">Submit</Button>
                    </form>
                </Card>

            </Paper>
        </Box>
    );

}
export default Payments;
