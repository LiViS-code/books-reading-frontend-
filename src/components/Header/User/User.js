import React from 'react';
import { Avatar, Name, UserName } from './User.styled';

export default function User() {
  return (
    <Name>
      <Avatar />
      <UserName>name</UserName>
    </Name>
  );
}
