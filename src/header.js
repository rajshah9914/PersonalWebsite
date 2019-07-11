import React from 'react';
import { render } from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutMe from './aboutme';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    primary:{
        main: green,
    },
    backgroundColor: '#fffde7',
    position: 'fixed',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 10,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: '#e65100',
  },
  button: {
    margin: theme.spacing(1),
  },
}));


export default function SearchAppBar() {
  const classes = useStyles();
  return (
    <div>
    <Router>
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography className={classes.title} variant="h4" noWrap id="name">
            Raj Shah
          </Typography>
          <Button color="primary" className={classes.button} onClick="window.open('http://rajshah.surge.sh/');">
            <Link to='/'>Home</Link>
          </Button>
          <Button color="primary" className={classes.button} onClick="window.open('http://rajshah.surge.sh/about-me');">
            <Link to='/about-me'>About Me</Link>
          </Button>
          <Button color="primary" className={classes.button} onClick="window.open('http://rajshah.surge.sh/achievements');">
            <Link to='/achievements'>My Achievements</Link>
          </Button>
          <Button color="primary" className={classes.button} onClick="window.open('http://rajshah.surge.sh/projects');">
            <Link to='/projects'>Projects</Link>
          </Button>
          <Button color="primary" className={classes.button} onClick="window.open('https://drive.google.com/file/d/17SkJghMH4IczlL01tSS3y1uvP4BiTeWt/view?usp=sharing');">
            <Link to='/resume'>Resume</Link>
            <Route path='/resume' component={() => { 
                window.location.href = 'https://drive.google.com/file/d/17SkJghMH4IczlL01tSS3y1uvP4BiTeWt/view?usp=sharing'; 
                return null;
            }}/>
          </Button>
          <Button color="primary" className={classes.button} onClick="window.open('https://forms.gle/wpe3kHBkdc1kfhsd8');">
            <Link to='/contact'>Get In Touch</Link>
            <Route path='/contact' component={() => { 
                window.location.href = 'https://forms.gle/wpe3kHBkdc1kfhsd8'; 
                return null;
            }}/>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
    </Router> 
    </div>
  );
}

