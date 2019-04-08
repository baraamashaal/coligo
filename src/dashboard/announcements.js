import React from 'react';
import FlatCard from '../components/flat-card';
import AvatarsList from '../components/avatar/avatarList';


function Announcements(props) {
  return (
    <>
      <FlatCard
        title="Announcements"
        subtitle="we educate warriors keep update"
      >
        <AvatarsList avatars={[]}/>
      </FlatCard>
    </>
  );
}

export default Announcements;
