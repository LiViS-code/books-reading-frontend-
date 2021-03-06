import React from 'react';
import { Div, MobDiv, Avatar, Container } from './Header.styled';

import Logo from './Logo';
import Navigation from './Navigation';
import LogOut from './LogOut';
import UserName from './UserName';
import UserAvatar from './UserAvatar';
import Line from './Line';
import { useMediaQuery } from './hooks/useMediaQuery';
import { authSelectors } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export default function Header() {
  const isMatches = useMediaQuery('(min-width: 768px)');
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container>
      <Div>
        <Logo />
        {isLoggedIn && isMatches && (
          <>
            <Avatar>
              <UserAvatar />
              <UserName />
            </Avatar>
            <Avatar>
              <Navigation />
              <Line />
              <LogOut />
            </Avatar>
          </>
        )}
        {isLoggedIn && !isMatches && (
          <MobDiv>
            <Navigation />
            <Line />
            <UserAvatar />
            <LogOut />
          </MobDiv>
        )}
      </Div>
    </Container>
  );
}
