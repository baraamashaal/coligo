import React from 'react';
import './App.css';
import { FormattedMessage } from 'react-intl';
import Layout from './layout';

import Dashboared from './dashboard';

import FlatCard from './components/flat-card';
// import {
//   openSidenav,
//   closeSidenav,
//   toggleSidenav
// } from './store/actions/ui-action';

const App = props => (
  <>
    <Layout>
      <Dashboared />
      <FlatCard title='announcement' subtitle='sdjhkh dhkjsahda dkajhs ahd adhad' >
        some content gose here
      </FlatCard>
    </Layout>
  </>
);
// const mapStateToProps = state => ({
//   isOpen: state.ui.isSidenavOpen
// });
// const mapDispatchToProps = {
//   openSidenav,
//   closeSidenav,
//   toggleSidenav
// };

export default App;
