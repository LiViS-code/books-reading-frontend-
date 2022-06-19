import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Attributes from './Attributes';
import {
  Title,
  Library,
  ButtonTraining,
  ButtonName,
  ButtonAdd,
  BookCard,
} from './index';
import {
  WhiteContainer,
  Back,
  ButtonBack,
} from '../../components/Modal/Modal.styled';
// import data from './data.json';
import sprite from './symbol-defs.svg';
import back from '../../image/svg/back.svg';
import operations from '../../redux/asyncThunks';
import { getAllBooks } from '../../redux/selectors/user-selectors';
// import userSelectors from '../../redux/selectors/user-selectors';
import LibraryForm from '../../components/LibraryForm/LibraryForm';
import LibraryModal from '../../components/LibraryModal';
import { useMediaQuery } from '../../components/Header/hooks/useMediaQuery';
import Modal from '../../components/Modal/Modal';
import { getTrainingData } from '../../redux/books/books-operations';

export default function LibraryView() {
  const dispatch = useDispatch();
  const books = useSelector(getAllBooks);
  const [hidden, setIsHidden] = useState(true);

  useEffect(() => {
    dispatch(operations.allBooks());
    dispatch(getTrainingData());
  }, [dispatch]);

  const alreadyRed = books
    ? books.filter(book => book.wish === 'Already read')
    : [];
  const readingNow = books
    ? books.filter(book => book.wish === 'Reading now')
    : [];
  const goingToRead = books
    ? books.filter(book => book.wish === 'Going to read')
    : [];

  const toggleHidden = () => {
    setIsHidden(state => !state);
  };
  const isMatches = useMediaQuery('(max-width: 768px)');
  const bigMedia = useMediaQuery('(min-width: 768px)');
  return (
    <Library>
      {!books && isMatches && (
        <LibraryForm style={{ width: '280px;', padding: '20px;' }} />
      )}
      {bigMedia && <LibraryForm />}
      {!hidden && (
        <Modal onClose={toggleHidden}>
          <WhiteContainer>
            <ButtonBack onClick={toggleHidden}>
              <Back src={back} alt="back" />
            </ButtonBack>
            <LibraryForm style={{ width: '280px' }} />
          </WhiteContainer>
        </Modal>
      )}
      {!books && <LibraryModal />}
      {alreadyRed.length !== 0 && (
        <div id="already_red">
          <Title>Прочитано</Title>
          <Attributes status={'already_red'} />
          {alreadyRed.map(el => (
            <BookCard book={el} key={el.title} />
          ))}
        </div>
      )}
      {readingNow.length !== 0 && (
        <div id="reading_now">
          <Title>Читаю</Title>
          <Attributes />
          {readingNow.map(el => (
            <BookCard book={el} key={el.title} />
          ))}
        </div>
      )}
      {goingToRead.length !== 0 && (
        <div id="going_to_read">
          <Title>Маю намір прочитати</Title>
          <Attributes />
          {goingToRead.map(el => (
            <BookCard book={el} key={el.title} />
          ))}
        </div>
      )}

      <Link to="../training" style={{ textDecoration: 'none' }}>
        <ButtonTraining type="button">
          <ButtonName>Моє тренування</ButtonName>
        </ButtonTraining>
      </Link>

      <ButtonAdd type="button" onClick={toggleHidden}>
        <svg width={16} height={16}>
          <use href={`${sprite}#plus`} />
        </svg>
      </ButtonAdd>

      {/* <LineChart></LineChart> */}
    </Library>
  );
}

// LibraryView();
// fetchBooksAPI();
