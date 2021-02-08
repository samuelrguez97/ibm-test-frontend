/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { Grid, Paper } from "@material-ui/core";

import { useHistory } from "react-router-dom";

import SupplierDetailService from "../service/SupplierDetailService";

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import useStyles from "./SupplierDetailContainer.styles";

const SupplierDetailContainer = (props) => {
  const classes = useStyles({});
  const history = useHistory();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const supplierService = new SupplierDetailService();

  const supplierId = props.match.params.id;

  const arrStars = [1, 2, 3, 4, 5];

  const [supplierDetail, setSupplierDetail] = useState([]);

  useEffect(() => getSupplierDetail(), []);

  const getSupplierDetail = async () => {
    try {
      const response = await supplierService.getSupplier(supplierId);
      setSupplierDetail(response);
    } catch {
      notFound();
    }
  };

  const postScore = async (type, index) => {
    let score = index;

    if (supplierDetail?.score === 1 && type === "filled" && index === 1) {
      score = 0;
    } else if (supplierDetail?.score === index) {
      return;
    }

    try {
      const response = await supplierService.postScore(
        supplierDetail.id,
        score
      );
      setSupplierDetail(response);
    } catch {
      history.push({ pathname: "/error" });
    }
  };

  const notFound = () => history.push({ pathname: "/not-found" });

  const handleGoBack = () => history.push({ pathname: "/supplier" });

  return (
    <section>
      <div className={classes.titleContainer}>
        Detalle del provedor:{" "}
        <span className={classes.titleSupplier}>{supplierDetail?.name}</span>
      </div>
      <Grid
        container
        spacing={4}
        justify="space-around"
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={10} md={5}>
          <Paper elevation={3}>
            <Grid className={classes.imageContainer}>
              <img
                className={classes.image}
                src={`/images/${supplierDetail?.logo}`}
                alt="brand-logo"
              ></img>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={11} md={5}>
          <Paper elevation={3}>
            <Grid container spacing={1} className={classes.infoContainer}>
              <Grid item className={classes.infoText} xs={12}>
                <span className={classes.infoLabel}>Nombre:</span>{" "}
                {supplierDetail?.name}
              </Grid>
              <Grid item className={classes.infoText} xs={12}>
                <span className={classes.infoLabel}>CIF:</span>{" "}
                {supplierDetail?.cif}
              </Grid>
              <Grid item className={classes.infoText} xs={12}>
                <span className={classes.infoLabel}>Fecha:</span>{" "}
                {supplierDetail?.createDate}
              </Grid>
              <Grid item xs={12}>
                {arrStars.map((index) =>
                  supplierDetail?.score >= index ? (
                    <IconButton
                      key={index}
                      onClick={() => postScore("filled", index)}
                    >
                      <StarIcon
                        className={classes.starButton}
                        color="primary"
                        fontSize={isMobile ? "default" : "large"}
                      />
                    </IconButton>
                  ) : (
                    <IconButton
                      key={index}
                      onClick={() => postScore("outlined", index)}
                    >
                      <StarBorderIcon
                        className={classes.starButton}
                        fontSize={isMobile ? "default" : "large"}
                      />
                    </IconButton>
                  )
                )}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} className={classes.backButton}>
          <Button
            size="large"
            color="primary"
            startIcon={<ArrowBackIos />}
            onClick={handleGoBack}
          >
            Volver
          </Button>
        </Grid>
      </Grid>
    </section>
  );
};

export default SupplierDetailContainer;
