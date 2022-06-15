import React from 'react';
import { authSelectors } from '../../../redux/selectors';
import { useSelector } from 'react-redux';

export default function UserName() {
  const name = useSelector(authSelectors.getUserName);
  return (
    <>
      <p>{name}</p>
    </>
  );
}
