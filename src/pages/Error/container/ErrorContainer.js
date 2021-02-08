import React from "react";

import ErrorImage from "./../../../assets/img/error.svg";

import { useHistory } from "react-router-dom";

import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";

import useStyles from "./ErrorContainer.styles";

const ErrorContainer = () => {
  const classes = useStyles({});
  const history = useHistory();

  const goHome = () => history.push({ pathname: "/supplier" });

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.imageContainer}
    >
      <img className={classes.image} src={ErrorImage} alt="Not found" />
      <Typography className={classes.textError}>
        Se ha producido un error
      </Typography>
      <Button
        size="large"
        color="primary"
        startIcon={<ArrowBackIos />}
        onClick={goHome}
        className={classes.button}
      >
        Volver
      </Button>
    </Grid>
  );
};

export default ErrorContainer;
