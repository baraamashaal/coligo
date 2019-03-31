import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import { MuiThemeProvider } from '@material-ui/core/styles';
import AppTheme from './theme';
import { makeStyles } from '@material-ui/core/styles';
import Header from './header';
import Sidenav from './sidenav';

import {
  openSidenav,
  closeSidenav,
  toggleSidenav
} from '../store/actions/ui-action';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    padding: theme.spacing(3),
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: 0
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 240
  }
}));

const Layout = props => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={AppTheme}>
      <CssBaseline />
      <Header />
      <Sidenav />
      <main
        className={[
          classes.content,
          props.isSidenavOpen ? classes.contentShift : null
        ].join(' ')}
      >
        {props.children}
      </main>
    </MuiThemeProvider>
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
)(Layout);
