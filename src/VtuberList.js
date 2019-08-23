import React from 'react'
import { Grid, Paper, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'Left',
    color: theme.palette.text.secondary,
  },

  Tags: {
    // marginLeft: theme.spacing(2),
    // marginRight: theme.spacing(2),
    paddingLeft: theme.spacing(1),
    listStyle: "none",
  },

  Tag: {
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    display: "inline-block",
    margin: "0 .3em .3em 0",
    border: "1px solid #aaa",
  },
}));

function VtuberList() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        {vtubers.map(vtuber => (
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Grid container>
                <Grid items xs={3}>
                  <Avatar src={vtuber.icon}/>
                </Grid>
                <Grid items xs>
                  <p>{vtuber.name}</p>
                  <p>{vtuber.description}</p>
                </Grid>
              </Grid>
              <ul className={classes.Tags}>
              {vtuber.tags.map(tag => (
                <li className={classes.Tag}>{tag}</li>
              ))}
              </ul>
            </Paper>
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  )
}

const vtubers = [
  {
    name: "meihei",
    icon: "https://pbs.twimg.com/profile_images/914255785202298880/1060Q-hJ_400x400.jpg",
    description: "python書けます。機械学習わかりません。",
    tags: ["金髪", "Python", "プログラミング"]
  },

  {
    name: "meihei",
    icon: "https://pbs.twimg.com/profile_images/914255785202298880/1060Q-hJ_400x400.jpg",
    description: "python書けます。機械学習わかりません。",
    tags: ["金髪", "Python", "プログラミング"]
  },

  {
    name: "meihei",
    icon: "https://pbs.twimg.com/profile_images/914255785202298880/1060Q-hJ_400x400.jpg",
    description: "python書けます。機械学習わかりません。",
    tags: ["金髪", "Python", "プログラミング"]
  },
]

export default VtuberList;