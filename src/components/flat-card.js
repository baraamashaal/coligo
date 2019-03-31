import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles(theme => ({
  root: {
    padding: '10px'
  },
  cardTitle: {
    fontWeight: 600,
    lineHeight: 1,
    textTransform: 'capitalize'
  },
  cardHeader: {
    paddingBottom: theme.spacing(2)
  },
  cardBody: {
    paddingBottom: theme.spacing(2)
  }
}));

export default function FlatCard(card) {
  const classes = useStyle();

  return (
    <Paper className={classes.root} elevation={0}>
      <div className={classes.cardHeader}>
        <Typography
          className={classes.cardTitle}
          color="textSecondary"
          variant="h6"
          component="h3"
        >
          {card.title}
        </Typography>
        <Typography color="textSecondary" variant="caption">
          {card.subtitle}
        </Typography>
      </div>
      <div  className={classes.cardBody}>{card.children}</div>
    </Paper>
  );
}
