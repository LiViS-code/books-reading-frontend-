import React from 'react';
import { Nav, Link } from './Navigation.styled';
import iconhome from '../../../image/svg/iconhome.svg';
import iconlibrary from '../../../image/svg/iconlibrary.svg';

export default function Navigation() {
  return (
    <Nav>
      <Link to="library">
        <img src={iconlibrary} alt="icon library" />
      </Link>
      <Link to="training">
        <img src={iconhome} alt="icon home" />
      </Link>
    </Nav>
  );
}
