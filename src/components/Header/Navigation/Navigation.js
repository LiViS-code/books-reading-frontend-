import React from 'react';
import { Nav, Div } from './Navigation.styled';
//import { NavLink } from 'react-router-dom';
import iconhome from '../../../image/svg/iconhome.svg';
import iconlibrary from '../../../image/svg/iconlibrary.svg';

export default function Navigation() {
  return (
    <Nav>
      <Div>
        <img src={iconlibrary} alt="icon library" />
      </Div>
      <Div>
        <img src={iconhome} alt="icon home" />
      </Div>
    </Nav>
  );
}
