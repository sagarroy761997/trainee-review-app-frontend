import * as React from 'react';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
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

export default function AdminEditModal() {
  const {
    openModal2,
    // setOpenModal1,
    setOpenModal2,
    apiData,
    // setApiData,
    userEditData,
    setUserEditData,
    update,
    setUpdate,
    setLoading,
  } = React.useContext(dataContext);

  const handleClose = () => {
    setOpenModal2(false);
  };
  const classes = useStyles();
  // const user = {
  //   email: localStorage.getItem('email'),
  //   role: localStorage.getItem('role'),
  // };
  let {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    role,
    parent_email: parentEmail,
  } = userEditData;
  const payload = {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    role,
    parent_email: parentEmail,
  };
  // const { managerData, trainerData, traineeData } = apiData;
  const editUser = async () => {
    await Axios
      .put(`http://localhost:4999/updateUser/${email}`, payload)
      .then((fetched) => {
        if(fetched.status === 200){
          setUpdate(!update)
        }
        // console.log(fetched.data);
        
      
        
      })
      .catch((error) => {
        console.log(error);
      });

      
  };
  const changeFirstName = (event) => {
    firstName = event.target.value;
    setUserEditData({
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
    setUserEditData({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      role,
      parent_email: parentEmail,
    });
  };
  const changeRole = (event) => {
    role = event.target.value;
    setUserEditData({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      role,
      parent_email: parentEmail,
    });
  };
  // const changeEmail = (event) => {
  //   email = event.target.value;
  //   setUserEditData({
  //     first_name: firstName,
  //     last_name: lastName,
  //     email,
  //     password,
  //     role,
  //     parent_email: parentEmail,
  //   });
  // };
  const changePassword = (event) => {
    password = event.target.value;
    setUserEditData({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      role,
      parent_email: parentEmail,
    });
  };
  const changeParentEmail = (event) => {
    parentEmail = event.target.value;
    setUserEditData({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      role,
      parent_email: parentEmail,
    });
  };
  // const Boss = (role) => {
  //   if (role === "manager") {
  //     return (
  //       <Box className={classes.input}>
  //         <Typography>Boss</Typography>
  //         <FormControl fullWidth>
  //           <Select
  //             labelId="demo-simple-select-label"
  //             id="demo-simple-select"
  //             value={parent_email}
  //             onChange={changeParentEmail}
  //             size="small"
  //             fullWidth
  //           >
  //             <MenuItem value={user.email}>Admin</MenuItem>
  //           </Select>
  //         </FormControl>
  //       </Box>
  //     );
  //   } else if (role === "trainer") {
  //     return (
  //       <Box className={classes.input}>
  //         <Typography>Boss</Typography>
  //         <FormControl fullWidth>
  //           <Select
  //             labelId="demo-simple-select-label"
  //             id="demo-simple-select"
  //             size="small"
  //             fullWidth
  //             value={parent_email}
  //             onChange={changeParentEmail}
  //           >
  //             {managerData.map((element) => (
  //               <MenuItem
  //                 value={element.email}
  //               >{`${element.first_name} ${element.last_name}`}</MenuItem>
  //             ))}
  //           </Select>
  //         </FormControl>
  //       </Box>
  //     );
  //   } else {
  //     return (
  //       <Box className={classes.input}>
  //         <Typography>Boss</Typography>
  //         <FormControl fullWidth>
  //           <Select
  //             labelId="demo-simple-select-label"
  //             id="demo-simple-select"
  //             value={parent_email}
  //             label="Boss"
  //             size="small"
  //             fullWidth
  //             onChange={changeParentEmail}
  //           >
  //             {trainerData.map((element) => (
  //               <MenuItem
  //                 value={element.email}
  //               >{`${element.first_name} ${element.last_name}`}</MenuItem>
  //             ))}
  //           </Select>
  //         </FormControl>
  //       </Box>
  //     );
  //   }
  // };

  return (
    <Dialog open={openModal2} onClose={handleClose} maxWidth="xl">
      <DialogTitle>Edit User</DialogTitle>
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
                type="text"
                fullWidth
                variant="outlined"
                size="small"
                value={email}
                inputProps={
                  { readOnly: true }
  
                }
              />
            </div>
            <div className={classes.input}>
              <Typography>password</Typography>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                type="text"
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
