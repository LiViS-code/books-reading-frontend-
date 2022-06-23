import LoginForm from '../../components/Login/LoginForm';
import LoginText from '../../components/Login/LoginText';
import { SectionContainer } from '../../components/Login/LoginForm/LoginForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getIsLoggedIn } from '../../redux/selectors/auth-selectors';
import queryString from 'query-string';
import operations from '../../redux/asyncThunks';

export const AuthView = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  let {
    token = null,
    email = null,
    name = null,
  } = queryString.parse(location.search);

  useEffect(() => {
    if (token && email && name) {
      dispatch(operations.googleLogin({ token, email, name }));
    }
  }, [dispatch, token, email, name]);

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
