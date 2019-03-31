import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import {
  openSidenav,
  closeSidenav,
  toggleSidenav
} from '../store/actions/ui-action';

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow:theme.shadows[0],
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${theme.ui.sidenav.width}px)`,
    marginLeft: theme.ui.sidenav.width,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  }
}));
const Header = props => {
  const classes = useStyles();
  return (
    <AppBar
      color="default"
      position="static"
      className={[
        classes.appBar,
        props.isSidenavOpen ? classes.appBarShift : null
      ].join(' ')}
    >
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={props.toggleSidenav}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  isSidenavOpen: state.ui.isSidenavOpen
});
const mapDispatchToProps = {
  openSidenav,
  closeSidenav,
  toggleSidenav
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
