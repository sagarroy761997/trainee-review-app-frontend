/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import {
  Typography, FormControl, MenuItem, Select, Box,
} from '@mui/material';
import useStyles from '../style/adminAddModalStyle';
import dataContext from '../context/dataContext';

function Boss({ role, parentEmail, changeParentEmail }) {
  const { apiData } = useContext(dataContext);
  const { managerData, trainerData } = apiData;
  const classes = useStyles();
  const user = {
    email: localStorage.getItem('email'),
    role: localStorage.getItem('role'),
  };

  if (role === 'manager') {
    return (
      <Box className={classes.input}>
        <Typography>Boss</Typography>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={parentEmail}
            onChange={changeParentEmail}
            size="small"
            fullWidth
          >
            <MenuItem value={user.email}>Admin</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  } if (role === 'trainer') {
    return (
      <Box className={classes.input}>
        <Typography>Boss</Typography>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size="small"
            fullWidth
            value={parentEmail}
            onChange={changeParentEmail}
          >
            {managerData.map((element) => (
              <MenuItem
                value={element.email}
              >
                {`${element.first_name} ${element.last_name}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
  }
  return (
    <Box className={classes.input}>
      <Typography>Boss</Typography>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={parentEmail}
          label="Boss"
          size="small"
          fullWidth
          onChange={changeParentEmail}
        >
          {trainerData.map((element) => (
            <MenuItem key={`key ${element.email}`}
              value={element.email}
            >
              {`${element.first_name} ${element.last_name}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Boss;
