import React from 'react';
import { Avatar, Name } from './User.styled';

export default function User() {
  return (
    <Name>
      <Avatar />
      <span>name</span>
    </Name>
  );
}
