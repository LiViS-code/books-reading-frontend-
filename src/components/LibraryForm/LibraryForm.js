import { useState } from 'react';
import { useDispatch } from 'react-redux';
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

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [pages, setPages] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'author':
        setAuthor(e.target.value);
        break;
      case 'year':
        setYear(e.target.value);
        break;
      case 'pages':
        setPages(e.target.value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setTitle('');
    setAuthor('');
    setYear('');
    setPages('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addBook({ title, author, year, pages }));

    reset();
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <div>
            <Label>
              Назва книги
              <Input
                onChange={handleChange}
                value={title}
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
                  onChange={handleChange}
                  value={author}
                  name="author"
                  type="text"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Author name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  placeholder="..."
                  required
                />
              </Label>
            </div>
            <NumberDiv>
              <Label>
                Рік випуску
                <Input
                  onChange={handleChange}
                  value={year}
                  name="year"
                  type="text"
                  placeholder="..."
                  pattern="^([12]\d)?(\d\d)$"
                  title="Invalid year"
                  required
                />
              </Label>
              <Label>
                Кількість сторінок
                <Input
                  onChange={handleChange}
                  value={pages}
                  name="pages"
                  type="number"
                  placeholder="..."
                  required
                />
              </Label>
            </NumberDiv>
          </InputContainer>
          <ButtonWrapper>
            <PrimaryButton type="submit">Додати</PrimaryButton>
          </ButtonWrapper>
        </InputWrapper>
      </Form>
    </FormContainer>
  );
};
export default LibraryForm;
