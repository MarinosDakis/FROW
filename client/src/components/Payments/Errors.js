import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

const Errors = ( {errors, half} ) => {

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
        {errors.map((storedErrors, index) => (
            <Alert key={index} className={classes.alert} severity="error">{storedErrors}</Alert>
        ))}
        </Grid>
    );

}

export default Errors;