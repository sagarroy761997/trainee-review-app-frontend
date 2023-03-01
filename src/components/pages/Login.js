import {
  Box, Button, TextField, Typography, Snackbar,
} from '@mui/material';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from '../../helper/Axios';
import { toast, ToastContainer } from 'react-toastify';
import useStyles from '../../style/loginStyle';
import dataContext from '../../context/dataContext';
import pic from '../../assets/images/new-logo.png';

function Login() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };
  const formData = {
    email,
    password,
  };
  const { setApiData, loading, setLoading, message, setMessage, openSnackbar, setOpenSnackbar } = useContext(dataContext);
  const handleSnackbar = () => {
    setOpenSnackbar(false)
  }
  const loginFunction = async () => {
    await Axios
      .post(process.env.REACT_APP_LOGIN_URL, formData)
      .then((fetched) => {
        console.log(fetched.status);
        console.log(fetched.data)
        if (fetched.data.role && fetched.data.email) {
          localStorage.setItem('email', fetched.data.email);
          localStorage.setItem('role', fetched.data.role);
          localStorage.setItem('first_name', fetched.data.first_name);
          localStorage.setItem('last_name', fetched.data.last_name);
          Axios
            .post('http://localhost:4999/fetchUserData', { email, role: fetched.data.role })
            .then((fetchedRenderData) => {

              if(fetchedRenderData.status === 200){
                
                setLoading(!loading);
                setApiData(fetchedRenderData.data);
                navigate('/landing');
              }
            });
          
        }else{
          setMessage(fetched.data)
          setOpenSnackbar(true)
        }
      })
      .catch((error) => {
        setMessage(error.message)
        setOpenSnackbar(true)
      });
  };
 
  return (
    <Box className={classes.root}>
      <Box className={classes.leftBox}>
        <Box className={classes.appName}>
          <p className={classes.heading}>Trainee Review Application</p>
        </Box>
      </Box>
      <Box className={classes.rightBox}>
        <img alt="logo" src={pic} className={classes.logo} />
        <Box className={classes.inputBox}>
          <Typography>Email</Typography>
          <TextField
            type="email"
            fullWidth
            placeholder="Enter your email"
            size="small"
            value={email}
            onChange={changeEmail}
          />
        </Box>
        <Box className={classes.inputBox}>
          <Typography>Password</Typography>
          <TextField
            type="password"
            fullWidth
            placeholder="Enter the password"
            size="small"
            value={password}
            onChange={changePassword}
          />
        </Box>
        <Button
          onClick={loginFunction}
          variant="contained"
          className={classes.inputBox}
        >
          Login
        </Button>
        <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbar}
        message={message}
        // action={action}
      />
      </Box>
    </Box>
  );
}

export default Login;
