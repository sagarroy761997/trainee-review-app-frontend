import React, { useContext } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,

} from '@mui/material';
import useStyles from '../style/formDialogStyle';
import BasicChip from './BasicChip';
import BasicCard from './BasicCard';

import dataContext from '../context/dataContext';

function ReadonlyReport() {
  const { apiData } = useContext(dataContext);
  const {
    data: {
      photo,
      first_name: firstName,
      last_name: lastName,
      qualification,
      start_date: startDate,
      end_date: endDate,
    },
    skill,
    certificate,
    project,

  } = apiData;

  // const [loading, setLoading] = useState(true);

  const classes = useStyles();
  // if (loading) {
  //   return <h1>loading ...</h1>;
  // }
  return (
    <div className={classes.root}>
      <div className={classes.imageDiv}>
        <img
          alt="traineeImage"
          src={photo}
          className={classes.image}
        />
      </div>
      <div className={classes.info}>
        <div className={classes.date}>
          <div className={classes.name}>
            <Typography className={classes.heading}>First Name</Typography>
            <TextField
              type="text"
              fullWidth
              variant="outlined"
              size="small"
              value={firstName}
              inputProps={
                { readOnly: true }
              }
            />
          </div>
          <div className={classes.name}>
            <Typography className={classes.heading}>Last Name</Typography>
            <TextField
              type="text"
              fullWidth
              variant="outlined"
              size="small"
              value={lastName}
              inputProps={
                { readOnly: true }
              }
            />
          </div>
        </div>
        <div className={classes.input}>
          <Typography className={classes.heading}>Qualification</Typography>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="outlined"
            size="small"
            value={qualification}
            inputProps={
              { readOnly: true }
            }
          />
        </div>

        <div className={classes.date}>
          <div className={classes.startDate}>
            <Typography className={classes.heading}>Start Date</Typography>
            <TextField
              type="date"
              variant="outlined"
              size="small"
              fullWidth
              value={startDate}
              inputProps={
                { readOnly: true }
              }
            />
          </div>
          <div className={classes.startDate}>
            <Typography className={classes.heading}>End Date</Typography>
            <TextField
              type="date"
              variant="outlined"
              size="small"
              fullWidth
              value={endDate}
              inputProps={
                { readOnly: true }

              }
            />
          </div>
        </div>
      </div>
      <div className={classes.certificate}>
        <div className={classes.certificateForm}>
          <Typography className={classes.certificateHeading}>
            Certificates
          </Typography>
        </div>

        <div className={classes.certificateStore}>
          {console.log(certificate)}
          {certificate.map((row) => (
            <div>
              <BasicChip data={row} />

            </div>
          ))}
        </div>
      </div>
      <div className={classes.project}>
        <div className={classes.projectForm}>
          <Typography className={classes.projectHeading}>
            Projects
          </Typography>

        </div>

        <div className={classes.projectStore}>
          {project.map((row) => (
            <BasicCard data={row} />
          ))}
        </div>
      </div>
      <div className={classes.skillTable}>
        <div className={classes.projectForm}>
          <Typography className={classes.projectHeading}>
            Skills
          </Typography>
        </div>

        <div className={classes.projectStore}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Skills</TableCell>
                  <TableCell align="right">Ranking</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {skill.map((row) => (
                  <TableRow>
                    <TableCell>{row.skill}</TableCell>
                    <TableCell align="right">{row.rating}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default ReadonlyReport;
