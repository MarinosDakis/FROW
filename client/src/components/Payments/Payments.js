import React, { useState, useEffect } from 'react';
import { Grid, Paper, Box, Typography, Card, Divider } from '@material-ui/core';
import Errors from './Errors';
import { useNavigate } from "react-router-dom";
import Input from '../Login/Input';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useStyles from "./styles";
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import {
    setCost, setServiceLinesForPurchase, decrementCost,
    incrementCost, incrementItems
} from '../../store/frowSlice';
import { Navigate } from 'react-router-dom';

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
    var totalQuantity = 0;
    var errors = [];
    const navigate = useNavigate();

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
        if (errorCount) handleSuccessPageValue();

    }

    return (
        <Box className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} style={{ marginTop: '30px' }}>
                        <Box textAlign="center" className={classes.brandContainer}>
                            <Typography className={classes.text} variant='h4'>Shopping Cart</Typography>
                            <ShoppingCartIcon className={classes.svg} />
                        </Box>
                        {serviceLinesForPurchase.map((cartItem, index) => {
                            totalQuantity += cartItem.itemCount;
                            return (
                                <Grid key={index} item xs={12} style={{ backgroundColor: 'black', color: 'white', margin: '10px 40px', borderRadius: '6px', padding: '5px 5px' }}>
                                    <h3 style={{ textAlign: 'center', backgroundColor: 'grey' }}>{cartItem.line}</h3>
                                    <Grid container style={{ textAlign: 'center' }}>
                                        <Grid item xs={6}>
                                            <p style={{ marginTop: '0' }}><b>Quantity</b>: {cartItem.itemCount}</p>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <p style={{ marginTop: '0' }}><b>Amount:</b> ${cartItem.total}</p>
                                        </Grid>
                                    </Grid>
                                </Grid>)
                        })}
                        <Grid item xs>
                            <Typography className={classes.text} variant='h6'>{`Total: $${cost}`}</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography className={classes.text} variant='h6'>{`Quantity: ${totalQuantity}`}</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid className={classes.grid}>
                    <form className={classes.form} onClick={handleSuccessPageValue === true && navigate('/success')}>
                        <Grid container spacing={2}>
                            {errors.length > 0 && <Errors className={classes.alert} errors={errors} />}
                            <Input name="creditCardNumber" label="Credit Card Number" handleChange={handleChange} autoFocus />
                            <Input name="creditCardCSV" label="CSV" handleChange={handleChange} type="password" half />
                            <Input name="creditCardExp" label="MM/YYYY" handleChange={handleChange} half />
                            <Button style={{ backgroundColor: "black" }} type="submit" variant='contained' fullWidth color="primary" className={classes.submit}>Purchase</Button>
                        </Grid>
                    </form>
                </Grid>
            </Paper>
        </Box>
    );

}
export default Payments;
