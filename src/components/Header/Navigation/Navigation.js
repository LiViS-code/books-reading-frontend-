import React from 'react';
import { Nav } from './Navigation.styled';
//import { NavLink } from 'react-router-dom';
import iconhome from '../../../image/svg/iconhome.svg';
import iconlibrary from '../../../image/svg/iconlibrary.svg';

export default function Navigation() {
  return (
    <Nav>
      <img src={iconlibrary} />
      <img src={iconhome} />
    </Nav>
  );
}
