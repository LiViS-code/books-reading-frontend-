// import { useFormik } from 'formik';
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
import { useState } from 'react';
import operations from '../../redux/asyncThunks';

// const initialValues = {
//     email: '',
//     password: '',
//     name: '',
//     confrimPassword: ''

// };

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confrimPassword, setConfrimPassword] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confrimPassword':
        setConfrimPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfrimPassword('');
  };
  // const formik = useFormik({
  //     initialValues,
  //     initialErrors: initialValues,
  //     // validationSchema: addBookSchema,
  //     validateOnBlur: true,
  //     onSubmit: values => {console.log(values)
  //         dispatch(operations.register(values.email, values.password, values.name ));
  //         reset();
  //     },
  // });

  // const reset = () => {
  //    return initialValues
  // };

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
          // onSubmit={formik.handleSubmit}
          onSubmit={handleSubmit}
        >
          <InputWrapper>
            <div>
              <Label>
                Ім’я <StarContainer>*</StarContainer>
                <Input
                  onChange={handleInputChange}
                  // {formik.handleChange}
                  value={name}
                  // {formik.values.name}
                  name="name"
                  type="text"
                  placeholder="..."
                  required
                />
              </Label>
            </div>
            <InputWrapper>
              <div>
                <Label>
                  Електронна адреса <StarContainer2>*</StarContainer2>
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
            </InputWrapper>
            <InputWrapper>
              <div>
                <Label>
                  Пароль<StarContainer3>*</StarContainer3>
                  <Input
                    onChange={handleInputChange}
                    // {formik.handleChange}
                    value={password}
                    // {formik.values.password}
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
                    onChange={handleInputChange}
                    // {formik.handleChange}
                    value={confrimPassword}
                    // {formik.values.confrimPassword}
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
          <RegistrationActive> Увійти</RegistrationActive>
        </RegistrationBox>
      </FormContainer>
    </BackgroundContainer>
  );
};
export default RegistrationForm;
