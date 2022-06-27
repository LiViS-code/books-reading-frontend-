import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  Container,
} from './Select.styled';
import { PrimaryButton } from '../../Buttons/PrimaryButton.styled';
import { getAllBooks } from '../../../redux/selectors/user-selectors';
import { getTrainingBooks } from '../../../redux/books/books-selectors';
import {
  addTrainingBook,
  addBookToTraining,
} from '../../../redux/books/books-operations';
import { Arrow } from '../../Datepickers/Countdown/Calendar.styled';
import Polygon from '../../../image/svg/Polygon.svg';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  // const [selectedBooks, setSelectedBooks] = useState([]);
  const books = useSelector(getAllBooks);
  const selectedBooks = useSelector(getTrainingBooks);

  const dispatch = useDispatch();

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const addBook = () => {
    const selectedBook = books.find(book => book.title === selectedOption);
    const isBookInArray = selectedBooks.find(
      book => book._id === selectedBook._id
    );

    if (!isBookInArray) {
      // setSelectedBooks([...selectedBooks, selectedBook]);
      dispatch(addTrainingBook(selectedBook));
    }
    // console.log(selectedBook._id);
    dispatch(addBookToTraining(selectedBook._id));

    // bookList(selectedBooks);
  };

  return (
    <Container>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || 'Обрати книги з бібліотеки '}
          <Arrow src={Polygon} alt="polygon" style={{ marginLeft: 'auto' }} />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {books &&
                books.map(option => (
                  <ListItem
                    onClick={() => onOptionClicked(option.title)}
                    key={option._id}
                  >
                    <span>{option.title}</span>
                    <span>{option.author}</span>
                    <span>{option.pages}</span>
                  </ListItem>
                ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>

      <PrimaryButton type="button" onClick={addBook}>
        Додати
      </PrimaryButton>
    </Container>
  );
};
