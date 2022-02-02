import React from 'react';
import { Grid, Paper, Box, Typography } from '@material-ui/core';
import useStyles from "./styles";
import DesignerDisplayComponent from './DesignerDisplayComponent/DesignerDisplayComponent';
import LineInfoComponent from './LineInfoComponent/LineInfoComponent';

const dummyLine = [
  {
    lineTitle: "Vang Bridal Spring '22'",
    lineSummary: "Wera Vang Bridal Spring '22 Line, curated specially with Spring '22 color trends in mind",
  },
  {
    lineTitle: "Vang Bridal Spring '22'",
    lineSummary: "Wera Vang Bridal Spring '22 Line, curated specially with Spring '22 color trends in mind",
  },
]

const dummyDesigner =
{
  designerName: "Wera Vang",
  desc: "Wera Vang is an American fashion designer who began her career at Wogue Magazine. At age 40 she became and independent bridal wear designer, launching her Wera Vang brand under her own name",
  img: "",
}

export default function Designers() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper variant="outlined" className={classes.paper}>
        <Grid>
          <Grid item>
            <Box justifyContent="center" display="flex">
              <DesignerDisplayComponent designerName={dummyDesigner.designerName} desc={dummyDesigner.desc} />
            </Box>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              {dummyLine.map((data, index) => (
                <Grid item key={index} xs={12} sm={12} md={12} lg={12} sx={{ marginBottom: 10 }}>
                  <LineInfoComponent lineTitle={data.lineTitle} lineSummary={data.lineSummary} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>

  )

}

