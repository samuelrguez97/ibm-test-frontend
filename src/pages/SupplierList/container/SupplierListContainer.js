/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { Grid } from "@material-ui/core";

import SupplierListService from "../service/SupplierListService";

import SupplierCard from "../components/SupplierCard/SupplierCard";

import useStyles from "./SupplierListContainer.styles";

const SupplierListContainer = () => {
  const classes = useStyles({});
  const history = useHistory();

  const supplierService = new SupplierListService();

  const [supplierList, setSupplierList] = useState([]);

  useEffect(() => getSupplierList(), []);

  const getSupplierList = async () => {
    try {
      const response = await supplierService.getSupplierList();
      setSupplierList(response);
    } catch {
      history.push({ pathname: "/error" });
    }
  };

  return (
    <section>
      <div className={classes.titleContainer}>Lista de proveedores</div>
      <Grid
        container
        justify="space-around"
        spacing={2}
        className={classes.cardsContainer}
      >
        {supplierList?.map((supplier, index) => (
          <Grid item key={index}>
            <SupplierCard supplier={supplier} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default SupplierListContainer;
