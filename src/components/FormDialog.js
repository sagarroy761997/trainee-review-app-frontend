import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import dataContext from "../context/dataContext";
import { Box, Typography } from "@mui/material";
import { Avatar, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import pic from "../assets/images/3-change1.jpg";
import useStyles from "../style/formDialogStyle";

import BasicCard from "./BsicCard";
import BasicChip from "./BasicChip";
import Report from "./Report";
export default function FormDialog() {
  
  const { open, setOpen } = React.useContext(dataContext);
  const [certificateLists, setCertificateLists] = React.useState([]);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Trainee Information</DialogTitle>
        <DialogContent>
          <Report/>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
