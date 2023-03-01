import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {
  Button, AppBar, Toolbar, Typography,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material';
import { useNavigate } from 'react-router-dom';
import dataContext from '../../context/dataContext';
import BasicAppBar from '../BasicAppBar';
import pic from '../../assets/images/logo2.png';
import Report from '../ReadonlyReport';
import AdminTable from '../AdminTable';
import useStyles from '../../style/landingStyle';
import AdminAddModal from '../AdminAddModal';
import TrainerTable from '../TrainerTable';
import TraineeTable from '../TraineeTable';
import Axios from '../../helper/Axios';
function Landing() {
  const {
    apiData, setApiData, loading, setLoading, setOpenModal1, update, setUpdate, message, setMessage, openSnackbar, setOpenSnackbar
  } = useContext(dataContext);

  const navigate = useNavigate();
  const classes = useStyles();
  const payload = {
    email: localStorage.getItem('email'),
    role: localStorage.getItem('role'),
    first_name: localStorage.getItem('first_name'),
    last_name: localStorage.getItem('last_name'),
  };
  const handleClickOpen = () => {
    setOpenModal1(true);
  };
  const fetchUserData = () => {
    Axios
      .post('http://localhost:4999/fetchUserData', payload)
      .then((fetched) => {
        if(fetched.status === 200){
          setApiData(fetched.data);
          setLoading(false);
          // navigate('/landing')
          console.log('useEffect')
        }
      });
  };
  useEffect(() => {
    fetchUserData();

  }, [update, setUpdate]);
  const logout = async () => {
    await Axios
      .post('http://localhost:4999/logout')
      .then((fetched) => {
        console.log(fetched.data, fetched.status);
        if (fetched.status === 200) {
          navigate('/');
          localStorage.removeItem('email');
          localStorage.removeItem('role');
          localStorage.removeItem('first_name');
          localStorage.removeItem('last_name');
        }
      });
  };
  if (loading) {
    return (
      <div className={classes.loaderBox}>
        <CircularProgress size={100} className={classes.loader} />
      </div>
    );
  }

  if (payload.role === 'admin') {
    const { managerData, trainerData, traineeData } = apiData;

    return (
      <div>
        <AppBar className={classes.bar}>
          <Toolbar className={classes.toolbar}>
            <div>
              <img src={pic} alt="logo" width="50" />
            </div>
            <div>
              <Button
                onClick={handleClickOpen}
                role={payload.role}
                className={classes.button}
              >
                Add User
              </Button>
              <Button onClick={logout} className={classes.button}>
                Logout
              </Button>
              
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          <div
            className={classes.tableBoxes}
            style={{ borderRadius: '10px !important' }}
          >
            <Typography className={classes.heading}>Manager Table</Typography>
            <AdminTable data={managerData} />
          </div>

          <div className={classes.tableBoxes}>
            <Typography className={classes.heading}>Trainer Table</Typography>
            <AdminTable data={trainerData} />
          </div>
          <div className={classes.tableBoxes}>
            <Typography className={classes.heading}>Trainee Table</Typography>
            <AdminTable data={traineeData} />
          </div>
        </div>

        <AdminAddModal />
      </div>
    );
  }
  if (payload.role === 'manager') {
    const { trainerData, allTraineeData } = apiData;
    return (
      <div>
        <BasicAppBar />
        <div className={classes.root}>
          <div className={classes.tableBoxes}>
            <Typography className={classes.heading}>Trainer Table</Typography>
            <TrainerTable data={trainerData} />
          </div>
          <div className={classes.tableBoxes}>
            <Typography className={classes.heading}>Trainee Table</Typography>
            <TraineeTable data={allTraineeData} />
          </div>
        </div>
      </div>
    );
  }
  if (payload.role === 'trainer') {
    const { traineeData } = apiData;
    return (
      <div>
        <BasicAppBar />

        <div className={classes.root}>
          <div className={classes.tableBoxes}>
            <Typography className={classes.heading}>Trainee Table</Typography>
            <TraineeTable data={traineeData} />
          </div>
        </div>
      </div>
    );
  }
  if (payload.role === 'trainee') {
    return (
      <div>
        <BasicAppBar />
        <Report />
      </div>
    );
  }
}

export default Landing;
