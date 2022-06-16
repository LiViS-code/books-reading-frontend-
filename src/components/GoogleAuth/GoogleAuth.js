import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import operations from '../../redux/asyncThunks';
import { GoogleButton, GoogleImage } from '../Login/LoginForm/LoginForm.styled';
import google_icon from '../../image/google_icon.png';

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const responseGoogle = async response => {
    try {
      const { accessToken } = response;
      const body = {
        accessToken,
      };
      dispatch(operations.google(body, history));
    } catch (error) {
      console.log('GOOGLE LOGIN FAILED');
      console.error(error);
    }
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      render={renderProps => (
        <GoogleButton onClick={renderProps.onClick}>
          {' '}
          Google<GoogleImage src={google_icon} alt="google icon"></GoogleImage>
        </GoogleButton>
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      autoLoad={false}
    />
  );
};

export default GoogleAuth;
