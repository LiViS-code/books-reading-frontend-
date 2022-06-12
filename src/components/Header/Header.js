import React from 'react';
//import styled from 'styled-components';
import { Div } from './Header.styled';
import { Container } from '../Layout/Layout.styled';

import Logo from './Logo';
import Navigation from './Navigation';
import LogOut from './LogOut';
import User from './User';

export default function Header() {
  return (
    <Container>
      <Div>
        <Logo />
        <User />
        <Navigation />
        <LogOut />
      </Div>
    </Container>
  );
}
