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
          <div className={classes.root}>
            <div className={classes.imageDiv}>
              <img alt="traineeImage" src={pic} className={classes.image} />

              <Button variant="contained" component="label">
                <PhotoCamera />
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </div>
            <div className={classes.info}>
              <div className={classes.input}>
                <Typography>Trainee Name</Typography>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className={classes.input}>
                <Typography>Qualification</Typography>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  size="small"
                />
              </div>

              <div className={classes.date}>
                <div className={classes.startDate}>
                  <Typography>Start Date</Typography>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    type="date"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </div>
                <div className={classes.startDate}>
                  <Typography>End Date</Typography>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    type="date"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </div>
              </div>
            </div>
            <div className={classes.certificate}>
            <div className={classes.certificateForm}>
                <Typography className={classes.certificateHeading}>
                  Add certificate
                </Typography>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </div>
              
                <div className={classes.certificateStore}>
                 <BasicChip/>
                 <BasicChip/>
                 <BasicChip/>
                 <BasicChip/>
                 <BasicChip/>
                 <BasicChip/>
                 <BasicChip/>
                 <BasicChip/>
                 <BasicChip/>
                 <BasicChip/>
                 <BasicChip/>
                 <BasicChip/>
                 <BasicChip/>
                 <BasicChip/><BasicChip/>
                 <BasicChip/>


                  
                </div>
              
            </div>
            <div className={classes.project}>
              <div className={classes.projectForm}>
                <Typography className={classes.projectHeading}>
                  Add Project
                </Typography>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </div>

              <div className={classes.projectStore}>
                <BasicCard />
              </div>
            </div>
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
