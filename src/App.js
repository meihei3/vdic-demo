import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';

import Thumbnail from './Thumbnail';
import Topbar from './Topbar'
import Search from './Search';
import VtuberList from './VtuberList';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <Container maxWidth='lg'>
        <Thumbnail />
        <Topbar />
        <Grid container direction="row">
          <Grid item xs={3}>
            <Search />
          </Grid>
          <Grid item xs={9}>
            <VtuberList />
          </Grid>
      </Grid>
      </Container>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  App: {
    textAlign: "center",
  },
}));

export default App;