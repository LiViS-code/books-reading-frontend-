import { useFormik } from 'formik';

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
} from '../Registration/Registration.styled'
import google_icon from '../../image/google_icon.png'



const initialValues = {
    email: '',
    password: '',
    name: '',
    confrimPassword: ''

};

const RegistrationForm = () => {
    const formik = useFormik({
        initialValues,
        initialErrors: initialValues,
        // validationSchema: addBookSchema,
        validateOnBlur: true,
        onSubmit: values => console.log(values),
    });

    return (
        <BackgroundContainer>
            <FormContainer>
                <GoogleButton>Google<GoogleImage src={google_icon} alt="google icon"></GoogleImage></GoogleButton>
                <Form onSubmit={formik.handleSubmit}>
                    <InputWrapper>
                        <div>
                            <Label>
                                Ім’я <StarContainer>*</StarContainer>
                                <Input
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
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
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
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
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        name="Password"
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
                                        value={formik.values.confrimPassword}
                                        name="email"
                                        type="text"
                                        placeholder="..."
                                        required
                                    />
                                </Label>
                            </div>

                        </InputWrapper>
                        <ButtonWrapper>
                            <LoginButton>Зареєструватися</LoginButton>
                        </ButtonWrapper>
                    </InputWrapper>
                </Form><RegistrationBox>
                    <Registration>Вже з нами? </Registration>
                    <RegistrationActive> Увійти</RegistrationActive>
                </RegistrationBox>
            </FormContainer>
        </BackgroundContainer>


    );
};
export default RegistrationForm;