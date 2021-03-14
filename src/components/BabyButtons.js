import React from "react";

import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroImage: {
    width: "100%",
    margin: '50px 0 20px',
  },
  linkButton: {
      color: '#3D405B',
      fontWeight: 600,
      borderColor: '#3D405B',
  },
}));

function BabyButtons(props) {
  const classes = useStyles();

  return (
      <Grid container justify="center" spacing={3} style={{marginTop: 5}}>
        <Grid item>
          <Button variant="outlined" className={classes.linkButton}>
            Baby Girl
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" className={classes.linkButton}>
            Baby Boy
          </Button>
        </Grid>
      </Grid>
  );
}

export default BabyButtons;
