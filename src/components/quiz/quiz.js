import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  quizIcon: {
    paddingLeft: '8px'
  },
  quizTitle: {
    paddingLeft: '0'
  },
  dl: { width: '100%', margin: '10px 0' },
  dt: {
    float: 'left',
    clear: 'left',
    '&:after': {
      content: '":"',
      display: 'inline',
      padding: '0 .3rem'
    }
  },
  dd: { padding: '0 0 0.5em .5em' }
}));

const Quiz = quiz => {
  const classes = useStyles();

  return (
    <Grid container component={ListItem}>
      <ListItemIcon className={classes.quizIcon}>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText className={classes.quizTitle} primary={quiz.title} />
      <Grid container>
        <dl className={classes.dl}>
          {quiz.info.map((value, i) => (
            <React.Fragment key={i}>
              <dt className={classes.dt}>{value.term}</dt>
              <dd className={classes.dd}>{value.desc}</dd>
            </React.Fragment>
          ))}
        </dl>
      </Grid>
    </Grid>
  );
};

Quiz.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.arrayOf(
    PropTypes.shape({
      term: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired
    })
  )
};

export default Quiz;
