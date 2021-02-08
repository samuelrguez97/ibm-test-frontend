import React from "react";

import NotFoundImage from "./../../../assets/img/404.svg";

import { useHistory } from "react-router-dom";

import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";

import useStyles from "./NotFound.styles";

const NotFoundContainer = () => {
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
      <img className={classes.image} src={NotFoundImage} alt="Not found" />
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

export default NotFoundContainer;
