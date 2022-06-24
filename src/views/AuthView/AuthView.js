import LoginForm from '../../components/Login/LoginForm';
import LoginText from '../../components/Login/LoginText';
import { SectionContainer } from '../../components/Login/LoginForm/LoginForm.styled';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getIsLoggedIn } from '../../redux/selectors/auth-selectors';

export const AuthView = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    isLoggedIn && navigate((location.pathname = '/library'));
  });

  return (
    <SectionContainer>
      <LoginForm></LoginForm>
      <LoginText></LoginText>
    </SectionContainer>
  );
};
export default AuthView;
