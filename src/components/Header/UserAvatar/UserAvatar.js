import React from 'react';
import { Avatar } from './UserAvatar.styled';
import { authSelectors } from '../../../redux/selectors';
import { useSelector } from 'react-redux';

export default function UserAvatar() {
  const name = useSelector(authSelectors.getUserName);
  return (
    <>
      <Avatar name={name} />
    </>
  );
}
