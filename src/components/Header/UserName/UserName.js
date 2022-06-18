import React from 'react';
import { authSelectors } from '../../../redux/selectors';
import { useSelector } from 'react-redux';
import { Name } from './UserName.styled';

export default function UserName() {
  const name = useSelector(authSelectors.getUserName);

  return (
    <>
      <Name>{name}</Name>
    </>
  );
}
