import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import {
  Form,
  Input,
  Label,
  InputWrapper,
  GoogleButton,
  GoogleImage,
  ButtonWrapper,
} from '../Login/LoginForm/LoginForm.styled';

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
import google_icon from '../../image/google_icon.png';
import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import operations from '../../redux/asyncThunks';
import { Link, useLocation } from 'react-router-dom';

// const initialValues = {
//     name: '',
//     email: '',
//     password: '',
//     confrimPassword: '',
// };

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confrimPassword, setConfrimPassword] = useState('');

  // const handleInputChange = e => {
  //   const { name, value } = e.currentTarget;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'email':
  //       setEmail(value);
  //       break;
  //     case 'password':
  //       setPassword(value);
  //       break;
  //     case 'confrimPassword':
  //       setConfrimPassword(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(operations.register({ name, email, password }));
  //   reset();
  // };

  // const reset = () => {
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  //   setConfrimPassword('');
  // };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confrimPassword: '',
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
        .required('Password is required'),
    }),
    onSubmit: values => {
      dispatch(
        operations.register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  return (
    <BackgroundContainer>
      <FormContainer>
        <GoogleButton
        // onClick={dispatch(operations.google())}
        // type="submit"
        >
          Google<GoogleImage src={google_icon} alt="google icon"></GoogleImage>
        </GoogleButton>
        <Form
          onSubmit={formik.handleSubmit}
          // onSubmit={handleSubmit}
        >
          <InputWrapper>
            <div>
              <Label>
                Ім’я <StarContainer>*</StarContainer>
                <Input
                  onChange={ // {handleInputChange}
                    formik.handleChange
                  }
                  value={ // {name}
                    formik.values.name
                  }
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
            </InputWrapper>
            <InputWrapper>
              <div>
                <Label>
                  Пароль<StarContainer3>*</StarContainer3>
                  <Input
                    onChange={formik.handleChange}
                    // {handleInputChange}
                    value={formik.values.password}
                    // {password}
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
                  <Input
                    onChange={formik.handleChange}
                    // {handleInputChange}
                    value={formik.values.confrimPassword}
                    // {confrimPassword}
                    onBlur={formik.handleBlur}
                    id="confrimPassword"
                    name="confrimPassword"
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
