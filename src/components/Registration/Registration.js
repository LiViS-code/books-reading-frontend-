import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import {
  Form,
  Input,
  Label,
  InputWrapper,
  ButtonWrapper,
} from '../Login/LoginForm/LoginForm.styled';
import GoogleAuth from '../GoogleAuth/GoogleAuth';

import {
  StarContainer,
  StarContainer2,
  StarContainer3,
  StarContainer4,
  LoginButton,
  Registration,
  RegistrationActive,
  RegistrationBox,
  BackgroundContainer,
  FormContainer,
} from '../Registration/Registration.styled';
import { useDispatch } from 'react-redux';
import operations from '../../redux/asyncThunks';
import { Link, useLocation } from 'react-router-dom';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Please enter your full name. Example: John Smith.')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters.')
        .max(30, 'Password must be no more 30 characters.')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(
        operations.register({
          name: values.name,
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
        <GoogleAuth></GoogleAuth>
        <Form onSubmit={formik.handleSubmit}>
          <InputWrapper>
            <div>
              <Label>
                Ім’я <StarContainer>*</StarContainer>
                {formik.touched.name && formik.errors.name ? (
                  <div style={{ color: '#FF6B08' }}>{formik.errors.name}</div>
                ) : null}
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="..."
                  required
                ></Input>
              </Label>
            </div>
            <InputWrapper>
              <div>
                <Label>
                  Електронна адреса <StarContainer2>*</StarContainer2>
                  {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: '#FF6B08' }}>
                      {formik.errors.email}
                    </div>
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
            </InputWrapper>
            <InputWrapper>
              <div>
                <Label>
                  Пароль<StarContainer3>*</StarContainer3>
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
                    placeholder="..."
                    required
                  />
                </Label>
              </div>
            </InputWrapper>
            <InputWrapper>
              <div>
                <Label>
                  Підтвердити пароль<StarContainer4>*</StarContainer4>
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div style={{ color: '#FF6B08' }}>
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                  <Input
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    onBlur={formik.handleBlur}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="text"
                    placeholder="..."
                    required
                  />
                </Label>
              </div>
            </InputWrapper>
            <ButtonWrapper>
              <LoginButton type="submit">Зареєструватися</LoginButton>
            </ButtonWrapper>
          </InputWrapper>
        </Form>
        <RegistrationBox>
          <Registration>Вже з нами? </Registration>
          <Link to="/login" replace state={location.state}>
            <RegistrationActive> Увійти</RegistrationActive>
          </Link>
        </RegistrationBox>
      </FormContainer>
    </BackgroundContainer>
  );
};
export default RegistrationForm;
