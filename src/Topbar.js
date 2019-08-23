import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import { lightBlue, blueGrey } from '@material-ui/core/colors';

function Topbar() {
  const classes = useStyles();

  return (
    <div className={classes.Root}>
      <Grid container className={classes.Topbar}>
        <Grid items xs>
          <Paper className={classes.Paper}>ランダム紹介</Paper>
        </Grid>
        <Grid items xs>
          <Paper className={classes.Paper}>新着更新</Paper>
        </Grid>
        <Grid items xs>
          <Paper className={classes.Paper}>3</Paper>
        </Grid>
        <Grid items xs>
          <Paper className={classes.Paper}>4</Paper>
        </Grid>
        <Grid items xs>
          <Paper className={classes.Paper}>5</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  Root: {
    margin: theme.spacing(2),
  },

  Topbar: {
    flexGrow: 1,
  },

  Paper: {
    backgroundColor: lightBlue[300],
    color: blueGrey[800],
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
}));

export default Topbar;
