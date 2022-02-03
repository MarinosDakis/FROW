import React, { useState, useEffect } from 'react';
import { Grid, Paper, Box, Typography, Card } from '@material-ui/core';
import Errors from './Errors';
import Success from './Success';
import Input from '../Login/Input';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useStyles from "./styles";
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import {
    setCost, setServiceLinesForPurchase, decrementCost,
    incrementCost, incrementItems
  } from '../../store/frowSlice';  

function Payments() {

    const column_style = {
        marginBottom: 15
    };

    const div_style = {
        display: "grid",
        justifyContent: "center",
    };

    const serviceLinesForPurchase = useSelector((state) => state.frowCounter.serviceLinesForPurchase);
    const cost = useSelector((state) => state.frowCounter.cost);
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
        console.log(serviceLinesForPurchase);
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
                <Grid container spacing={2}>
                    <Grid item xs={12} style={{marginTop: '30px'}}>
                        <h1 style={{paddingLeft: '40px'}}>Shopping Cart</h1>
                        {serviceLinesForPurchase.map((cartItem) => {
                           return(
                            <Grid item xs={12} style={{backgroundColor: 'black', color: 'white', margin: '10px 40px', borderRadius: '6px', padding: '5px 5px'}}>
                                <h3 style={{textAlign: 'center', backgroundColor: 'grey'}}>{cartItem.line}</h3>
                                <Grid container style={{textAlign: 'center'}}>
                                    <Grid item xs={6}>
                                        <p style={{marginTop: '0'}}><b>Quantity</b>: {cartItem.itemCount}</p>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p style={{marginTop: '0'}}><b>Amount:</b> ${cartItem.total}</p>
                                    </Grid>
                                </Grid>
                            </Grid>)
                        })}
                        <Grid item xs={12} style={{marginBottom: '50px'}}>
                            <h2 style={{paddingLeft: '40px'}}>Grand Total: ${cost}</h2>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid className={classes.grid}>
                    <form autoComplete="off" noValidate onSubmit={isValid() === false && console.log("hi")}>
                        <div style={div_style}>
                            {/* {errors.length > 0 && <Errors className={classes.alert} errors={errors} />} */}
                            <div style={column_style} >
                                <Input placeholder="Credit Card Number" name="creditCardNumber" label="Credit Card Number" value={cardData.cardNumber} type="text" onChange={handleChange} autoFocus />
                            </div>
                            <div style={column_style} >
                                <Input placeholder="Credit Card CSV" name="creditCardCsv" label="CSV" value={cardData.csv} type="password" onChange={handleChange} />
                            </div>
                            <div style={column_style}>
                                <Input placeholder="Credit Card Expiration" name="creditCardExp" label="Exp. Date" value={cardData.expDate} type="text" onChange={handleChange} />
                            </div>
                            <div style={column_style}>
                                <Button variant="contained" size="large" type="submit">Submit</Button>
                            </div>
                        </div>
                    </form>
                </Grid>
            </Paper>
        </Box>
    );

}
export default Payments;
