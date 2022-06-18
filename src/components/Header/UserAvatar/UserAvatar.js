import React from 'react';
import { authSelectors } from '../../../redux/selectors';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { theme } from '../../../constants/Theme';
const {
  colors: { backgroundColorForm, primaryColor },
} = theme;

export default function UserAvatar() {
  const name = useSelector(authSelectors.getUserName);
  return (
    <>
      <Avatar
        sx={{
          bgcolor: `${backgroundColorForm}`,
          color: `${primaryColor}`,
          width: '33px',
          height: '33px',
        }}
        alt={name}
        src="/broken-image.jpg"
      ></Avatar>
    </>
  );
}
