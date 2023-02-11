import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "../../style/loginStyle";
import axios from "axios";
import dataContext from "../../context/dataContext";
import pic from "../../assets/images/new-logo.png"
const Login = () => {
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
    email: email,
    password: password,
  };
  const { apiData, setApiData } = useContext(dataContext);
  const apiPostMethod = async () => {
    await axios
      .post(process.env.REACT_APP_LOGIN_URL, formData, {
        withCredentials: true,
      })
      .then((fetched) => {
        console.log(fetched.data);
        setApiData(fetched.data);
        //  console.log(apiData)
        if (fetched.data.role) {
          navigate("/table");
        }
      })
      .catch((error) => {
        setApiData(error.message);
      });
  };

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.leftBox}>
        <Box className={classes.appName}>
          <p className={classes.heading}>Trainee Review Application</p>
        </Box>
      </Box>
      <Box className={classes.rightBox}>
        <img alt="logo" src={pic} className={classes.logo}/>
        <Box className={classes.inputBox}>
          <Typography>Email</Typography>
          <TextField
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
            fullWidth
            placeholder="Enter the password"
            size="small"
            value={password}
            onChange={changePassword}
          />
        </Box>
        <Button
          onClick={apiPostMethod}
          variant="contained"
          className={classes.inputBox}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
