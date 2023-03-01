import * as React from 'react';
import Box from '@mui/material/Box';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import Axios from '../helper/Axios';
import useStyles from '../style/adminAddModalStyle';
import dataContext from '../context/dataContext';
import Boss from './Boss';

export default function AdminAddModal() {
  const {
    openModal1, setOpenModal1, apiData, setApiData,
  } = React.useContext(dataContext);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [role, setRole] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [parentEmail, setParentEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleClose = () => {
    setOpenModal1(false);
  };
  const classes = useStyles();
  // const user = {
  //   email: localStorage.getItem('email'),
  //   role: localStorage.getItem('role'),
  // };
  const payload = {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    role,
    parent_email: parentEmail,
  };
  let { managerData, trainerData, traineeData } = apiData;
  const addUser = async () => {
    await Axios
      .post('http://localhost:4999/signup', payload)
      .then((fetched) => {
        console.log(fetched.data, fetched.status);

        if (fetched.status === 201) {
          if (role === 'manager') {
            managerData = [...managerData, payload];
          } else if (role === 'trainer') {
            trainerData = [...trainerData, payload];
          } else {
            traineeData = [...traineeData, payload];
          }
          setApiData({ managerData, trainerData, traineeData });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setFirstName('');
    setLastName('');
    setRole('');
    setEmail('');
    setParentEmail('');
    setPassword('');
  };
  const changeFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const changeLastName = (event) => {
    setLastName(event.target.value);
  };
  const changeRole = (event) => {
    setRole(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };
  const changeParentEmail = (event) => {
    setParentEmail(event.target.value);
  };
  const updateHandler = () => {
    addUser();
    handleClose();
  };

  return (
    <Dialog open={openModal1} onClose={handleClose} maxWidth="xl">
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <div className={classes.root}>
          <div className={classes.name}>
            <div className={classes.input}>
              <Typography>First Name</Typography>
              <TextField
                autoFocus
                margin="dense"
                type="text"
                fullWidth
                variant="outlined"
                size="small"
                value={firstName}
                onChange={changeFirstName}
              />
            </div>
            <div className={classes.input}>
              <Typography>Last Name</Typography>
              <TextField
                autoFocus
                margin="dense"
                type="text"
                fullWidth
                variant="outlined"
                size="small"
                value={lastName}
                onChange={changeLastName}
              />
            </div>
          </div>
          <div className={classes.name}>
            <div className={classes.input}>
              <Typography>email</Typography>
              <TextField
                autoFocus
                margin="dense"
                type="email"
                fullWidth
                variant="outlined"
                size="small"
                value={email}
                onChange={changeEmail}
              />
            </div>
            <div className={classes.input}>
              <Typography>password</Typography>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                type="password"
                fullWidth
                variant="outlined"
                size="small"
                value={password}
                onChange={changePassword}
              />
            </div>
          </div>
          <div className={classes.name}>
            <div className={classes.input}>
              <Box sx={{ minWidth: 120 }}>
                <Typography>Role</Typography>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    size="small"
                    fullWidth
                    onChange={changeRole}
                  >
                    <MenuItem value="manager">Manager</MenuItem>
                    <MenuItem value="trainer">Trainer</MenuItem>
                    <MenuItem value="trainee">Trainee</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <Boss role={role} parentEmail={parentEmail} changeParentEmail={changeParentEmail} />
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={updateHandler}
        >
          Update Table
        </Button>
      </DialogActions>
    </Dialog>
  );
}
