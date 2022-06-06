import { useFormik } from 'formik';
import addBookSchema from '../../models/addBookSchema';
import {
  FormContainer,
  Form,
  Input,
  Label,
  InputWrapper,
  InputContainer,
  NumberDiv,
  ButtonWrapper,
  AddButton,
} from './LibraryForm.styled';

const initialValues = {
  title: '',
  name: '',
  year: '',
  pages: '',
};

const LibraryForm = () => {
  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validationSchema: addBookSchema,
    validateOnBlur: true,
    onSubmit: values => console.log(values),
  });

  return (
    <FormContainer>
      <Form onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <div>
            <Label>
              Назва книги
              <Input
                onChange={formik.handleChange}
                value={formik.values.title}
                name="title"
                type="text"
                placeholder="..."
                required
              />
            </Label>
          </div>
          <InputContainer>
            <div>
              <Label>
                Автор книги
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
            <NumberDiv>
              <Label>
                Рік випуску
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.year}
                  name="year"
                  type="text"
                  placeholder="..."
                  required
                />
              </Label>
              <Label>
                Кількість сторінок
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.pages}
                  name="pages"
                  type="number"
                  placeholder="..."
                  required
                />
              </Label>
            </NumberDiv>
          </InputContainer>
          <ButtonWrapper>
            <AddButton>Додати</AddButton>
          </ButtonWrapper>
        </InputWrapper>
      </Form>
    </FormContainer>
  );
};
export default LibraryForm;
