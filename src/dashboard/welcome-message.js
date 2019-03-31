import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles(theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  wlcMsg: {
    textTransform: 'uppercase',
    background: 'linear-gradient(to right, #185B76 0%, #84C6BB 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 700,
    display: 'inline-block'
  }
}));

export default function welcomeMessage() {
  const classes = useStyle();

  return (
    <Paper className={classes.root} elevation={0}>
      <Typography className={classes.wlcMsg} variant="h4" component="h1">
        <FormattedMessage
          id="dashboared.wlcMsg.title"
          defaultMessage="page title"
        />
      </Typography>
      <Typography color="textSecondary" component="p">
        <FormattedMessage
          id="dashboared.wlcMsg.desc"
          defaultMessage="some desc"
        />
      </Typography>
    </Paper>
  );
}
