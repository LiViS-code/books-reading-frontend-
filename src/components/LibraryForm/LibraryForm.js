import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  FormContainer,
  Form,
  Input,
  Label,
  InputWrapper,
  InputContainer,
  NumberDiv,
  ButtonWrapper,
} from './LibraryForm.styled';
import { PrimaryButton } from '../Buttons/PrimaryButton.styled';

import { addBook } from '../../redux/books/books-operations';

const LibraryForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      year: '',
      pages: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(50, 'Book title should be less than 50')
        .matches(/^[^\s-]/, 'Name should not start from space or dash')
        .required('Book title is required'),
      author: Yup.string()
        .max(50, 'Author name should be less than 50')
        .matches(
          /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$/,
          'Author name must contain letters'
        )
        .required('Author is required'),
      year: Yup.number()
        .typeError('Year should be a number')
        .positive('Year should be positive')
        .required('Year is required')
        .max(2022, `Year should be less than currentYear`)
        .min(1000, 'Year should not be less than 1000'),
      pages: Yup.number()
        .typeError('Pages should be a number')
        .positive('Pages should be positive')
        .max(9999, 'Must be no more than 4 characters')
        .required('Pages is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(
        addBook({
          title: values.title,
          author: values.author,
          year: values.year,
          pages: values.pages,
        })
      );
      resetForm({ values: '' });
    },
  });
  return (
    <FormContainer>
      <Form onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <div>
            <Label>
              Назва книги
              {formik.touched.title && formik.errors.title ? (
                <div>{formik.errors.title}</div>
              ) : null}
              <Input
                onChange={formik.handleChange}
                value={formik.values.title}
                onBlur={formik.handleBlur}
                name="title"
                id="title"
                placeholder="..."
              />
            </Label>
          </div>
          <InputContainer>
            <div>
              <Label>
                Автор книги
                {formik.touched.author && formik.errors.author ? (
                  <div>{formik.errors.author}</div>
                ) : null}
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.author}
                  onBlur={formik.handleBlur}
                  name="author"
                  id="author"
                  placeholder="..."
                />
              </Label>
            </div>
            <NumberDiv>
              <Label>
                Рік випуску
                {formik.touched.year && formik.errors.year ? (
                  <div>{formik.errors.year}</div>
                ) : null}
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.year}
                  onBlur={formik.handleBlur}
                  name="year"
                  id="year"
                  placeholder="..."
                />
              </Label>
              <Label>
                Кількість сторінок
                {formik.touched.pages && formik.errors.pages ? (
                  <div>{formik.errors.pages}</div>
                ) : null}
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.pages}
                  onBlur={formik.handleBlur}
                  name="pages"
                  id="pages"
                  placeholder="..."
                />
              </Label>
            </NumberDiv>
          </InputContainer>
          <ButtonWrapper>
            <PrimaryButton
              type="submit"
              onClick={() => window.location.reload(false)}
            >
              Додати
            </PrimaryButton>
          </ButtonWrapper>
        </InputWrapper>
      </Form>
    </FormContainer>
  );
};
export default LibraryForm;
