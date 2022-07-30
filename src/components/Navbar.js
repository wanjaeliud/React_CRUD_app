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
        <Toolbar style={{marginLeft: 50}} >
          <NavLink to="/" className={classes.spacing} >Crud App</NavLink>
          <NavLink to="list" className={classes.spacing}>List Tutorials</NavLink>
          <NavLink to="create" className={classes.spacing}>Create Tutorial</NavLink>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;