import React from 'react';
import { Paper, IconButton, InputBase, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { lightBlue, blueGrey } from '@material-ui/core/colors';
import SearchIcon from '@material-ui/icons/Search';


function Search() {
  const classes = useStyles();

  return (
    <div className={classes.Root}>
      <Paper className={classes.Paper}>
        <Hidden smDown>
          <h4 className={classes.X1}>記載人数 {numberOfVtuber}人</h4>
          <h4>タグ</h4>
        </Hidden>
        <div>
          <Hidden smDown>
            <p className={classes.TagDescription}>特徴(複数選択可)</p>
            <ul className={classes.Tags}>
              {tags.map(tag => (
                <li className={classes.Tag}>{tag}</li>
              ))}
            </ul>
            <p className={classes.TagDescription}>イメージカラー(２つまで)</p>
            <ul className={classes.Tags}>
              {colors.map(tag => (
                <li className={classes.Tag}>{tag}</li>
              ))}
            </ul>
          </Hidden>
          <Paper className={classes.SearchRoot}>
            <InputBase
              className={classes.SearchInput}
              placeholder="Search Tags"
              />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <Hidden smDown>
          <p>おすすめ検索ワード</p>
          <ul className={classes.Tags}>
            {words.map(tag => (
              <li className={classes.Tag}>{tag}</li>
            ))}
          </ul>
        </Hidden>
      </Paper>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  Root: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },

  Paper: {
    backgroundColor: lightBlue[300],
    color: blueGrey[800],
  },

  X1: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    paddingTop: theme.spacing(1),
  },

  X2: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    paddingTop: theme.spacing(1),
  },

  TagDescription: {
    textAlign: "left",
    paddingLeft: theme.spacing(1),
    fontWeight: "bold",
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
  },

  SearchRoot: {
    padding: '2px 4px',
    margin: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    backgroundColor: lightBlue[50],
  },

  SearchInput: {
    marginLeft: 8,
    flex: 1,
  },
}));

const numberOfVtuber = 7235;

const tags = [
  "赤髪(112)",
  "青髪(274)",
  "金髪(534)",
  "黒髪(948)",
  "白髪(230)",
  "緑髪(201)",
  "茶髪(760)",
]

const colors = [
  "赤(112)",
  "青(274)",
  "金(534)",
  "黒(948)",
  "白(230)",
  "緑(201)",
  "茶(760)",
  "オレンジ(760)",
  "ピンク(760)",
]

const words = [
  "VRChat",
  "SHOWROOM",
  "エモモ",
  "バーチャルキャスト"
]

export default Search;