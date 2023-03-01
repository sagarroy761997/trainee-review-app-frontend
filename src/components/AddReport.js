import React, { useState, useContext, useEffect } from "react";

import BasicCard from "./BasicCard";
import BasicChip from "./BasicChip";
import { PhotoCamera } from "@mui/icons-material";
import useStyles from "../style/formDialogStyle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button,
  TextField,
  Typography,
} from "@mui/material";

import dataContext from "../context/dataContext";

const AddReport = (props) => {
  const { userEditData, setUserEditData } = useContext(dataContext);
  const [photo, setPhoto] = useState('https://as2.ftcdn.net/v2/jpg/02/17/34/67/1000_F_217346782_7XpCTt8bLNJqvVAaDZJwvZjm0epQmj6j.jpg')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [qualification, setQualification] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [certificate, setCertificate] = useState([])
  const [project, setProject] = useState([])
  const [skill, setSkill] = useState([])
    if(userEditData){
        setPhoto(userEditData.data.photo)
    }

//   const {
//     data: { photo, first_name, last_name, qualification, start_date, end_date, email, parent_email },
//     skill,
//     certificate,
//     project,
    
//   } = userEditData;

  

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imageDiv}>
        <img
          alt="traineeImage"
          src={photo}
          className={classes.image}
        />

        <Button variant="contained" component="label">
          <PhotoCamera />
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </div>
      <div className={classes.info}>
        <div className={classes.date}>
          <div className={classes.name}>
            <Typography>First Name</Typography>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              type="text"
              fullWidth
              variant="outlined"
              size="small"
              value={firstName}
            />
          </div>
          <div className={classes.name}>
            <Typography>Last Name</Typography>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              type="text"
              fullWidth
              variant="outlined"
              size="small"
              value={lastName}
            />
          </div>
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
            value={qualification}
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
              value={startDate}
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
              value={endDate}
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
          {certificate.map((row) => (
            <BasicChip data={row} />
          ))}
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
          {project.length!==0?project.map((row) => (
            <BasicCard data={row} />
          )):<p>No Project Currently Available</p>}
        </div>
      </div>
      <div className={classes.skillTable}>
        <div className={classes.projectForm}>
          <Typography className={classes.projectHeading}>
            Skill Table
          </Typography>
          <IconButton>
            <AddIcon />
          </IconButton>
        </div>

        <div className={classes.projectStore}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Skills</TableCell>
                  <TableCell>Ranking</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              {skill.length!==0?<TableBody>
                {skill.map((row) => (
                  <TableRow>
                    <TableCell>{row.skill}</TableCell>
                    <TableCell>{row.rating}</TableCell>
                    <TableCell>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>: <TableRow><Typography>No Skills Currently Added For This Trainee </Typography></TableRow>}
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default AddReport;
