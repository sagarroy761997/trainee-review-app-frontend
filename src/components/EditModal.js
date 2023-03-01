import * as React from 'react';
// import Box from '@mui/material/Box';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import axios from 'axios';
import useStyles from '../style/adminAddModalStyle';
import dataContext from '../context/dataContext';
import Boss from './Boss';
import TrainerBoss from './TrainerBoss';
import Axios from '../helper/Axios'
export default function EditModal() {
  const {
    openModal2,
    setOpenModal2,
    apiData,
    setApiData,
    traineeEditData,
    setTraineeEditData,
    traineesOfTrainer,
    setTraineesOfTrainer,
    update,
    setUpdate
  } = React.useContext(dataContext);
  // console.log(traineeEditData)
  const { role, password } = traineeEditData;
  let {
    first_name: firstName, last_name: lastName, email, parent_email: parentEmail,
  } = traineeEditData;
  const { personalData, trainerData, allTraineeData } = apiData;

  const handleClose = () => {
    setOpenModal2(false);
  };
  const classes = useStyles();
  const payload = {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    role,
    parent_email: parentEmail,
  };
  const editUser = async () => {
    console.log(traineesOfTrainer)
    await Axios
      .put(`http://localhost:4999/updateUser/${email}`, payload,)
      .then((fetched) => {
        console.log(fetched.status)
        if(fetched.status === 200){
          console.log(fetched.data)
          // console.log('edit')
          setUpdate(!update);

          
          setTraineeEditData(payload)

        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const changeFirstName = (event) => {
    firstName = event.target.value;
    setTraineeEditData({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      role,
      parent_email: parentEmail,
    });
  };
  const changeLastName = (event) => {
    lastName = event.target.value;
    setTraineeEditData({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      role,
      parent_email: parentEmail,
    });
  };
  const changeEmail = (event) => {
    email = event.target.value;
    setTraineeEditData({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      role,
      parent_email: parentEmail,
    });
  };
  const changeParentEmail = (event) => {
    console.log(event.target.value)
    parentEmail = event.target.value;
    console.log(parentEmail);
    setTraineeEditData({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      role,
      parent_email: parentEmail,
    });
  };
 
  return (
    <Dialog open={openModal2} onClose={handleClose} maxWidth="xl">
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
                value={traineeEditData.first_name}
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
                type="text"
                fullWidth
                variant="outlined"
                size="small"
                value={email}
                onChange={changeEmail}
                inputProps={
                  { readOnly: true }
                }
              />
            </div>
            <div className={classes.input}>
              {/* {Boss(role)} */}
              <Boss role={role} parentEmail={parentEmail} changeParentEmail={changeParentEmail} />
            </div>
          </div>

        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            editUser();
            handleClose();
          }}
        >
          Update Table
        </Button>
      </DialogActions>
    </Dialog>
  );
}
