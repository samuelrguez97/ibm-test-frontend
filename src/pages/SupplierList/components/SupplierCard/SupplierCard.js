import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import { useHistory } from "react-router-dom";

import useStyles from "./SupplierCard.styles";
import { Button, CardActions } from "@material-ui/core";

const SupplierCard = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const { supplier } = props;

  const arrStars = [1, 2, 3, 4, 5];

  const handleClick = () =>
    history.push({ pathname: `/supplier/${supplier?.id}` });

  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardActionArea>
        <CardMedia>
          <div className={classes.mediaContainer}>
            <img
              className={classes.media}
              src={`/images/${supplier?.logo}`}
              alt={supplier?.name}
            ></img>
          </div>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h3">
            {supplier?.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            CIF: {supplier?.cif}
          </Typography>
          <section className={classes.rate}>
            {arrStars.map((index) =>
              supplier?.score >= index ? (
                <StarIcon key={index} color="primary" />
              ) : (
                <StarBorderIcon key={index} />
              )
            )}
          </section>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" onClick={handleClick}>
          Ver detalle
        </Button>
      </CardActions>
    </Card>
  );
};

export default SupplierCard;
