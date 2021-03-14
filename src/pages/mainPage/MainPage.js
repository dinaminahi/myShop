import React from "react";

import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CurbsideHeader from "./CurbsideHeader";
import header from "./../../header.jpeg";
import tShirts from "./../../t-shirts.jpeg";
import girl from "./../../girl.jpeg";
import boy from "./../../boy.jpeg";

import AllButtonLinks from "../../components/AllButtonLinks";
import SubTwoSectionsHeader from "./SubTwoSectionsHeader";

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

function MainPage(props) {
  const classes = useStyles();

  return (
    <div>
      <CurbsideHeader />
      <img src={header} className={classes.heroImage} alt="hero image"></img>
      <AllButtonLinks />
      <img
        src={tShirts}
        className={classes.heroImage}
        alt="t-shirts image"
      ></img>
      <AllButtonLinks />
      <SubTwoSectionsHeader />
    </div>
  );
}

export default MainPage;
