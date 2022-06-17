// import { useFormik } from 'formik';
// import addBookSchema from '../../models/addBookSchema';
import {
  FormContainer,
  Form,
  Input,
  Label,
  InputWrapper,
  Registration,
  GoogleButton,
  GoogleImage,
  ButtonWrapper,
  LoginButton,
  StarContainer,
  StarContainer2,
  BackgroundContainer,
  // SectionContainer
} from './LoginForm.styled';
import google_icon from '../../../image/google_icon.png';

import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../../redux/asyncThunks';
import { Link, useLocation } from 'react-router-dom';

// const initialValues = {
//   email: '',
//   password: '',
// };

const LoginForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  // const formik = useFormik({
  //   initialValues,
  //   initialErrors: initialValues,
  //   // validationSchema: addBookSchema,
  //   validateOnBlur: true,
  //   onSubmit: values => {console.log(values)
  //     dispatch(operations.logIn(values.email, values.password ));
  //     dispatch(operations.google());
  //   },
  // });

  return (
    <BackgroundContainer>
      <FormContainer>
        <GoogleButton
          // onClick={dispatch(operations.google())}
          type="submit"
        >
          Google<GoogleImage src={google_icon} alt="google icon"></GoogleImage>
        </GoogleButton>
        <Form
          onSubmit={handleSubmit}
          // {formik.handleSubmit}
        >
          <InputWrapper>
            <div>
              <Label>
                Електронна адреса <StarContainer>*</StarContainer>
                <Input
                  onChange={handleInputChange}
                  // {formik.handleChange}
                  value={email}
                  // {formik.values.email}
                  name="email"
                  type="text"
                  placeholder="your@email.com"
                  required
                />
              </Label>
            </div>
            <InputWrapper>
              <div>
                <Label>
                  Пароль <StarContainer2>*</StarContainer2>
                  <Input
                    onChange={handleInputChange}
                    // {formik.handleChange}
                    value={password}
                    // {formik.values.password}
                    name="password"
                    type="text"
                    placeholder="Пароль"
                    required
                  />
                </Label>
              </div>
            </InputWrapper>
            <ButtonWrapper>
              <LoginButton type="submit">Увійти</LoginButton>
            </ButtonWrapper>
          </InputWrapper>
        </Form>
        <Link to="registration" state={location.state}>
          <Registration> Реєстрація </Registration>
        </Link>
      </FormContainer>
    </BackgroundContainer>
  );
};
export default LoginForm;
