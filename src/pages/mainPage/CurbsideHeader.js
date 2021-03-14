import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import car from "../../car.svg";

const useStyles = makeStyles((theme) => ({
  car: {
    width: 110,
  },
  curbsideTitle: {
      fontWeight: 600,
      color: '#81B29A',
  },
  curbsideContent: {
      borderBottom: '7px solid #81B29A'
  },
  getDetails: {
    borderBottom: '1px solid #81B29A',
    color: '#81B29A',
    fontSize: '1rem',
    textDecoration: 'none',
  }
}));

function CurbsideHeader(props) {
  const classes = useStyles();

  return (
    <Grid container justify="space-between" alignItems="center" spacing={5} className={classes.curbsideContent}>
      <Grid item xs={2}>
        <img src={car} alt="car" className={classes.car} />
      </Grid>
      <Grid item xs={8} style={{textAlign: 'center'}}>
        <Typography variant="h5" className={classes.curbsideTitle}>
          CHOSE CURBSIDE OR IN STORE PICKUP TODAY
        </Typography>
        <Typography variant="h6" style={{color: '#3D405B'}}>FREE SHIPPING ON ORDERS $50+</Typography>
      </Grid>
      <Grid item xs={2} style={{textAlign: 'end'}}>
        <a href="/curbside" className={classes.getDetails}>GET DETAILS</a>
      </Grid>
    </Grid>
  );
}

export default CurbsideHeader;
