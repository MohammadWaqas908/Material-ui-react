import React from 'react';
import './App.css';
//import complex from './complex.jpg';

import { Button, makeStyles, Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  testButton: {
    backgroundColor: "Black"
  }
  
}));
function App() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" className={classes.testButton}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit" className={classes.testButton}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default App;
