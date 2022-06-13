import { useFormik } from 'formik';
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
    SectionContainer

} from './LoginForm.styled';
import google_icon from '../../../image/google_icon.png'

const initialValues = {
    email: '',
    password: '',

};

const LoginForm = () => {
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
                                Електронна адреса <StarContainer>*</StarContainer>
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
                        <InputWrapper>
                            <div>
                                <Label>
                                    Пароль <StarContainer2>*</StarContainer2>
                                    <Input
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        name="password"
                                        type="text"
                                        placeholder="Пароль"
                                        required
                                    />
                                </Label>
                            </div>

                        </InputWrapper>
                        <ButtonWrapper>
                            <LoginButton>Додати</LoginButton>
                        </ButtonWrapper>
                    </InputWrapper>
                </Form>
                <Registration>Реєстрація</Registration>
            </FormContainer>
        </BackgroundContainer>


    );
};
export default LoginForm;