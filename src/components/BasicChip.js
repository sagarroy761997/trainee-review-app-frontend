/* eslint-disable react/prop-types */
import * as React from 'react';
import { Link } from '@mui/material';
import useStyles from '../style/basicChipStyle';

export default function BasicChip({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link
        href={data.link}
        target="_blank"
        underline="none"
        className={classes.link}
      >
        {data.name}
      </Link>
    </div>
  );
}
