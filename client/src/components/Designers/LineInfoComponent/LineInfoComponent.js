import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

import useStyles from "./styles";

export default function DesignerDisplayComponent(props) {

  const { lineTitle, lineSummary } = props;
  const classes = useStyles();

  return (
    <Card component={Link} to="/products" className={classes.root}>
      <CardContent className={classes.root}>
        <Typography textAlign="center" gutterBottom variant="h5" style={{marginBottom: '10px'}}>{lineTitle}</Typography>
        <Typography textAlign="center" gutterBottom variant="p" style={{fontSize: '1.1em', marginBottom: '0', marginTop: '0', textAlign: 'left'}}>{lineSummary}</Typography>
      </CardContent>
    </Card>
  )
}
