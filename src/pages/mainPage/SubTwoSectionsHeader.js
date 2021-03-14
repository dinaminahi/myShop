import React from "react";

import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CurbsideHeader from "./CurbsideHeader";
import header from "./../../header.jpeg";
import tShirts from "./../../t-shirts.jpeg";
import girl from "./../../girl.jpeg";
import boy from "./../../boy.jpeg";

import BabyButtons from "../../components/BabyButtons";

const useStyles = makeStyles((theme) => ({
  heroImage: {
    width: "100%",
    margin: "50px 0 20px",
  },
  dollar: {
    verticalAlign: "225%",
    fontSize: "23%",
  },
  price: {
    fontWeight: 700,
    color: "#E07A5F",
  },
  priceUp: {
    display: "inline-block",
    width: "1em",
    fontSize: "19%",
    verticalAlign: "190%",
    lineHeight: 1,
    textAlign: "left !important",
  },
  mainTitle: {
    fontWeight: 700,
    color: "#81B29A",
  },
  linkButton: {
    color: "#3D405B",
    fontWeight: 600,
    borderColor: "#3D405B",
  },
}));

function SubTwoSectionsHeader(props) {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" spacing={5}>
      <Grid item xs={6} style={{ textAlign: "center" }}>
        <img
          src={girl}
          className={classes.heroImage}
          alt="baby girl image"
        ></img>
        <Typography variant="h5" className={classes.mainTitle}>
          NEW! COLLECTIBLE BODYSUITS
        </Typography>
        <Typography variant="h6" style={{ color: "#3D405B" }}>
          Everyday easy outfits made even cuter!
        </Typography>
        <Typography variant="h1" className={classes.price}>
          <span className={classes.dollar}>$</span>6
          <span className={classes.priceUp}>& up</span>
        </Typography>
        <Typography variant="subtitle1" className={classes.mainTitle}>
          DOORBUSTER
        </Typography>
        <BabyButtons />
      </Grid>
      <Grid item xs={6} style={{ textAlign: "center" }}>
        <img
          src={boy}
          className={classes.heroImage}
          alt="baby girl image"
        ></img>
        <Typography variant="h5" className={classes.mainTitle}>
          NEW! ROMPERS
        </Typography>
        <Typography variant="h6" style={{ color: "#3D405B" }}>
          Get ready to romp in a snap!
        </Typography>
        <Typography variant="h1" className={classes.price}>
          <span className={classes.dollar}>$</span>7
          <span className={classes.priceUp}>& up</span>
        </Typography>
        <Typography variant="subtitle1" className={classes.mainTitle}>
          DOORBUSTER
        </Typography>
        <BabyButtons />
      </Grid>
    </Grid>
  );
}

export default SubTwoSectionsHeader;
