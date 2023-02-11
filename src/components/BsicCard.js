import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useStyles from "../style/basicCardStyle"
export default function BasicCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>{`project name`}</Typography>
        <Typography>{`project timeline`}</Typography>
        <Typography>{`skills aquired`}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Github Link</Button>
        <Button size="small">Video Link</Button>
      </CardActions>
    </Card>
  );
}
