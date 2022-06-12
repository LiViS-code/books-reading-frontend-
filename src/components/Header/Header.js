import React from 'react';
import { Div, MobDiv } from './Header.styled';

import Logo from './Logo';
import Navigation from './Navigation';
import LogOut from './LogOut';
import UserName from './UserName';
import UserAvatar from './UserAvatar';
import Line from './Line';
import { useMediaQuery } from './hooks/useMediaQuery';

export default function Header() {
  const isMatches = useMediaQuery('(min-width: 768px)');
  return (
    <Div>
      <Logo />

      {isMatches && (
        <>
          <UserAvatar />
          <UserName />
          <Navigation />
          <Line />
          <LogOut />
        </>
      )}
      {!isMatches && (
        <MobDiv>
          <Navigation />
          <Line />
          <UserAvatar />
          <LogOut />
        </MobDiv>
      )}
    </Div>
  );
}
