import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary
  },
  avatarTitle: {
    fontWeight: 700
    // lineHeight:'1',
  },
  avatarSubtitle: {
    fontWeight: 300
  },
  avatarMsg: {
    paddingTop: '8px',
    paddingBottom: '8px'
  }
}));

const AvatarItem = avatar => {
  const classes = useStyles();
  return (
    <>
      <Grid component={ListItem} item xs={12} sm={6} md={3} lg={2} xl={1}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={avatar.src} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              component="h5"
              variant="subtitle2"
              className={classes.avatarTitle}
            >
              {avatar.name}
            </Typography>
          }
          secondary={
            <Typography
              component="h6"
              variant="body2"
              className={classes.avatarSubtitle}
            >
              {avatar.date}
            </Typography>
          }
        />
      </Grid>
      <Grid item xs>
        <Typography className={classes.avatarMsg} component="p" variant="body2">
          {avatar.desc}
        </Typography>
      </Grid>
    </>
  );
};

export default AvatarItem;
