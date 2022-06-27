import { SectionContainer } from '../../components/Login/LoginForm/LoginForm.styled';
import RegistrationForm from '../../components/Registration';
import LoginText from '../../components/Login/LoginText';

export const RegistrationView = () => {
  return (
    <SectionContainer>
      <RegistrationForm />
      <LoginText />
    </SectionContainer>
  );
};

export default RegistrationView;
