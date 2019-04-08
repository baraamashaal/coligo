import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import AvatarItem from './avatarItem';

const AvatarsList = props => {
  return (
    <Grid component={List} container>
      {props.avatars.map(avatar => (
        <AvatarItem
          src={avatar.image}
          name={avatar.title}
          date={avatar.date}
          message={avatar.message}
        />
      ))}
    </Grid>
  );
};

export default AvatarsList;
