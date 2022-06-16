import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Countdown } from '../Datepickers';
import {
  Heading,
  TimingContainer,
  TrainingButton,
} from './TrainingPage.styled';
import MyGoal from '../MyGoal';
import LineChart from '../LineChart/LineChart';
import { TrainLib } from './Library/TrainLib';
import ResultSection from '../ResultSection';
import { Dropdown } from './Select/Select';
import {
  getTrainingBooks,
  getDaysLeft,
  getStartTraining,
  getEndTraining,
  getTraining,
} from '../../redux/books/books-selectors';
import {
  addTraining,
  getTrainingData,
} from '../../redux/books/books-operations';
import operations from '../../redux/asyncThunks';
import { getAllBooks } from '../../redux/selectors/user-selectors';

export const TrainingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.allBooks());
    dispatch(getTrainingData());
  }, []);

  // const [trainingBooks, setTrainingBooks] = useState(null);
  const allUserBooks = useSelector(getAllBooks);
  const trainingBooks = useSelector(getTrainingBooks);
  const training = useSelector(getTraining);
  const start = useSelector(getStartTraining);
  const end = useSelector(getEndTraining);
  let allPages = 0;

  // const daysLeft = useSelector(getDaysLeft);

  const startTraining = () => {
    const daysLeft = Math.floor((end - start) / 86400000);
    dispatch(addTraining({ start, end }));
    // console.log(training);
    // const booksForTraining = allUserBooks.filter(book =>
    //   console.log(training.books)
    // );
    // booksForTraining.map(book => allPages += book.pages);
    // console.log(allPages);
    // console.log(daysLeft);
  };

  return (
    <>
      <MyGoal />
      <TimingContainer>
        <Heading>Моє тренування</Heading>
        <Countdown />
      </TimingContainer>
      <Dropdown />
      <div style={{ maxWidth: '928px' }}>
        <TrainLib />
      </div>

      <TrainingButton onClick={startTraining}>Почати тренування</TrainingButton>
      <LineChart />

      <ResultSection />
    </>
  );
};
