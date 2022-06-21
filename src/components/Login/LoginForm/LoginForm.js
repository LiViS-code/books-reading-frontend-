import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  FormContainer,
  Form,
  Input,
  Label,
  InputWrapper,
  Registration,
  // GoogleButton,
  ButtonWrapper,
  LoginButton,
  StarContainer,
  StarContainer2,
  BackgroundContainer,
  // SectionContainer
} from './LoginForm.styled';
import GoogleAuth from '../../GoogleAuth/GoogleAuth';
import queryString from 'query-string';
import React from 'react';
import { useEffect } from 'react';
// import { useState } from 'react';
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

  sessionStorage.clear();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleInputChange = e => {
  //   const { name, value } = e.currentTarget;
  //   switch (name) {
  //     case 'email':
  //       setEmail(value);
  //       break;
  //     case 'password':
  //       setPassword(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(operations.logIn({ email, password }));
  //   reset();
  // };

  // const reset = () => {
  //   setEmail('');
  //   setPassword('');
  // };
  let {
    token = null,
    email = null,
    name = null,
  } = queryString.parse(location.search);

  useEffect(() => {
    if (token && email && name) {
      dispatch(operations.googleLogin({ token, email, name }));
    }
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters.')
        .required('Password is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(
        operations.logIn({
          email: values.email,
          password: values.password,
        })
      );
      resetForm({ values: '' });
    },
  });

  return (
    <BackgroundContainer>
      <FormContainer>
        {/* <GoogleButton
          // onClick={dispatch(operations.google())}
          type="submit"
        >
          Google<GoogleImage src={google_icon} alt="google icon"></GoogleImage>
        </GoogleButton> */}
        <GoogleAuth></GoogleAuth>
        <Form
          onSubmit={formik.handleSubmit}
          // {handleSubmit}
        >
          <InputWrapper>
            <div>
              <Label>
                Електронна адреса <StarContainer>*</StarContainer>
                {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: '#FF6B08' }}>{formik.errors.email}</div>
                ) : null}
                <Input
                  onChange={formik.handleChange}
                  // {handleInputChange}
                  value={formik.values.email}
                  // {email}
                  onBlur={formik.handleBlur}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </Label>
            </div>
            <InputWrapper>
              <div>
                <Label>
                  Пароль <StarContainer2>*</StarContainer2>
                  {formik.touched.password && formik.errors.password ? (
                    <div style={{ color: '#FF6B08' }}>
                      {formik.errors.password}
                    </div>
                  ) : null}
                  <Input
                    onChange={formik.handleChange}
                    // {handleInputChange}
                    value={formik.values.password}
                    // {password}
                    onBlur={formik.handleBlur}
                    id="password"
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
        <Link to="/registration" state={location.state}>
          <Registration> Реєстрація </Registration>
        </Link>
      </FormContainer>
    </BackgroundContainer>
  );
};
export default LoginForm;
