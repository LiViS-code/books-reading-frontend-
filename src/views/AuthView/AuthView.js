import LoginForm from '../../components/Login/LoginForm';
import LoginText from '../../components/Login/LoginText';
import { SectionContainer } from '../../components/Login/LoginForm/LoginForm.styled';

export const AuthView = () => {
  return (
    <SectionContainer>
      <LoginForm></LoginForm>
      <LoginText></LoginText>
    </SectionContainer>
  );
};
export default AuthView;
