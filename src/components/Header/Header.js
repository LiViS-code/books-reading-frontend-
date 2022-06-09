import React from 'react';
import { Div } from './Header.styled';
import { Container } from '../Layout/Layout.styled';

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
    <Container>
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
          <>
            <Navigation />
            <Line />
            <UserAvatar />
            <LogOut />
          </>
        )}
      </Div>
    </Container>
  );
}
