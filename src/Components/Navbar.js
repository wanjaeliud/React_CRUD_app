import React from 'react';
import {AppBar, makeStyles, Toolbar} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#212121',
  },
  spacing: {
    paddingLeft: 20,
    color: '#fff',
    fontSize: '15px',
    textDecoration: 'none',
  }
})

const Navbar = () => {
  const classes = useStyles()
  return (
      <AppBar className={classes.header} position='static'>
        <Toolbar>
          <NavLink to="/" className={classes.spacing} >Crud App</NavLink>
          <NavLink to="/" className={classes.spacing}>All Tutorials</NavLink>
          <NavLink to="/" className={classes.spacing}>Add Tutorial</NavLink>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;