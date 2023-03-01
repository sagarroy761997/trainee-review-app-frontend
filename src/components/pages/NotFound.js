import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import useStyles from '../../style/notFOundStyle';

function Notfound() {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">Error 404</Typography>
      <Typography>The Page you are Searching does not exist</Typography>
      <Button
        variant="contained"
        onClick={() => {
          navigate('/');
        }}
      >
        Go to Login
      </Button>
    </div>
  );
}

export default Notfound;
