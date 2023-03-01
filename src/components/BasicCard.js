/* eslint-disable react/prop-types */
import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import useStyles from '../style/basicCardStyle';
// import DeleteIcon from "@mui/icons-material/Delete";
export default function BasicCard({ data }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>{data.name}</Typography>
        <Typography>{`${data.days} Days` }</Typography>
        <Typography>{}</Typography>
      </CardContent>
      <CardActions>
        <Link href={data.github} underline="none">
          <GitHubIcon />
        </Link>
        <Link href={data.video} underline="none">
          <PlayCircleIcon />
        </Link>
        {/* <IconButton size="small">
          <DeleteIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
}
