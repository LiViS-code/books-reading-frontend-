import React from 'react';
import { GoogleButton, GoogleImage } from '../Login/LoginForm/LoginForm.styled';
import google_icon from '../../image/google_icon.png';

const GoogleAuth = () => {
  return (
    <GoogleButton href="https://book-reader-team.herokuapp.com/api/auth/google">
      <GoogleImage src={google_icon} alt="google icon"></GoogleImage>
      Google
    </GoogleButton>
  );
};

export default GoogleAuth;
