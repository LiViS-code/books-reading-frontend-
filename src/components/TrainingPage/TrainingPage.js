import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Countdown } from '../Datepickers';
import { TimingContainer, TrainingButton } from './TrainingPage.styled';
import { ButtonAdd } from '../../views/LibraryView';
import MyGoal from '../MyGoal';
import LineChart from '../LineChart/LineChart';
import { TrainLib } from './Library/TrainLib';
import ResultSection from '../ResultSection';
import { Dropdown } from './Select/Select';
import {
  // getTrainingBooks,
  // getDaysLeft,
  getStartTraining,
  getEndTraining,
  // getTraining,
} from '../../redux/books/books-selectors';
import {
  addTraining,
  getTrainingData,
} from '../../redux/books/books-operations';
import operations from '../../redux/asyncThunks';
// import { getAllBooks } from '../../redux/selectors/user-selectors';
import { useMediaQuery } from '../Header/hooks/useMediaQuery';
import sprite from '../../views/LibraryView/symbol-defs.svg';
import Modal from '../Modal/Modal';

export const TrainingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.allBooks());
    dispatch(getTrainingData());
  }, [dispatch]);

  // const [trainingBooks, setTrainingBooks] = useState(null);
  // const allUserBooks = useSelector(getAllBooks);
  // const trainingBooks = useSelector(getTrainingBooks);
  // const training = useSelector(getTraining);
  const start = useSelector(getStartTraining);
  const end = useSelector(getEndTraining);
  // let allPages = 0;

  // const daysLeft = useSelector(getDaysLeft);

  const startTraining = () => {
    // const daysLeft = Math.floor((end - start) / 86400000);
    dispatch(addTraining({ start, end }));
    // console.log(training);
    // const booksForTraining = allUserBooks.filter(book =>
    //   console.log(training.books)
    // );
    // booksForTraining.map(book => allPages += book.pages);
    // console.log(allPages);
    // console.log(daysLeft);
  };

  const [hidden, setIsHidden] = useState(true);
  const toggleHidden = () => {
    setIsHidden(state => !state);
  };
  const isMatches = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <MyGoal />
      {isMatches && (
        <TimingContainer>
          <Countdown />
        </TimingContainer>
      )}
      {!hidden && (
        <Modal onClose={toggleHidden}>
          <TimingContainer style={{ width: '280px;', height: '100vw;' }}>
            <Countdown />
          </TimingContainer>
        </Modal>
      )}
      <Dropdown />
      <div style={{ maxWidth: '928px' }}>
        <TrainLib />
      </div>

      <TrainingButton onClick={startTraining}>Почати тренування</TrainingButton>
      <LineChart />
      <ButtonAdd type="button" onClick={toggleHidden}>
        <svg width={16} height={16}>
          <use href={`${sprite}#plus`} />
        </svg>
      </ButtonAdd>
      <ResultSection />
    </>
  );
};
