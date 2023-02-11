import * as React from "react";
import Chip from "@mui/material/Chip";
import useStyles from "../style/basicChipStyle"

export default function BasicChip() {
    const classes= useStyles();
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return <Chip className={classes.root} label="Certificate" variant="outlined" onDelete={handleDelete} />;
}
