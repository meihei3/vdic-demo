import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { lightBlue, blueGrey } from '@material-ui/core/colors';

function Thumbnail() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.Thumbnail}>
        <h1>Vtuber図鑑</h1>
      </div>
    </Paper>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    backgroundColor: lightBlue[300],
  },

  Thumbnail: {
    padding: "30px 0px",
    color: blueGrey[800],
  },
}));

export default Thumbnail;
