import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: 400,
    margin: 50
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard(props) {
  const { car } = props;
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography color="primary" variant="h4">
          {car.make} {car.model}
        </Typography>
        <Typography color="textPrimary" variant="h6">
          {car.MPG} miles per gallon
        </Typography>
        <Typography color="textSecondary">{car.VIN} (VIN)</Typography>
        <Typography color="textSecondary">{car.transmission_type}</Typography>
        <Typography color="textSecondary">{car.title_status}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">B U Y</Button>
      </CardActions>
    </Card>
  );
}
