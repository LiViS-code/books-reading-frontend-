import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  FormContainer,
  Form,
  Input,
  Label,
  InputWrapper,
  Registration,
  ButtonWrapper,
  LoginButton,
  StarContainer,
  StarContainer2,
  BackgroundContainer,
} from './LoginForm.styled';
import GoogleAuth from '../../GoogleAuth/GoogleAuth';
import React from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../../redux/asyncThunks';
import { Link, useLocation } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  sessionStorage.clear();

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
        <GoogleAuth />
        <Form onSubmit={formik.handleSubmit}>
          <InputWrapper>
            <div>
              <Label>
                Електронна адреса <StarContainer>*</StarContainer>
                {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: '#FF6B08' }}>{formik.errors.email}</div>
                ) : null}
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.email}
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
                    value={formik.values.password}
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
