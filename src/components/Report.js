import React from 'react'
import { TextField,  Button, Typography } from '@mui/material'
import BasicCard from "./BsicCard";
import BasicChip from "./BasicChip";
import { PhotoCamera } from '@mui/icons-material';
import useStyles from "../style/formDialogStyle"
import {IconButton} from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import pic from "../assets/images/3-change2.jpg"
const Report = () => {
  const classes = useStyles();
  return (
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
  )
}

export default Report