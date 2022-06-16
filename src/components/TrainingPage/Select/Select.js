import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  Button,
} from './Select.styled';
import { getAllBooks } from '../../../redux/selectors/user-selectors';
import { getTrainingBooks } from '../../../redux/books/books-selectors';
import {
  addTrainingBook,
  addBookToTraining,
} from '../../../redux/books/books-operations';

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
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption || 'BOOKS'}
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
                  {option.title}
                </ListItem>
              ))}
          </DropDownList>
        </DropDownListContainer>
      )}
      <Button type="button" onClick={addBook}>
        Додати
      </Button>
    </DropDownContainer>
  );
};
