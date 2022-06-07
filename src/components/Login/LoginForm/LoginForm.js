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
    BackgroundContainer

} from './LoginForm.styled';

const initialValues = {
    title: '',
    name: '',
    year: '',
    pages: '',
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
                <GoogleButton>Google<GoogleImage></GoogleImage></GoogleButton>
                <Form onSubmit={formik.handleSubmit}>
                    <InputWrapper>
                        <div>
                            <Label>
                                Електронна адреса <StarContainer>*</StarContainer>
                                <Input
                                    onChange={formik.handleChange}
                                    value={formik.values.title}
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
                                        value={formik.values.name}
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