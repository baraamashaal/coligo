import React from 'react';

import WelcomeMessage from './welcome-message';
import Announcements from './announcements';
import Quizzes from './quizzes';

export default function Dashboared() {
  return (
    <>
      <WelcomeMessage />
      <Announcements />
      <Quizzes />
    </>
  );
}
