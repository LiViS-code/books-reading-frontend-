import { useState } from 'react';
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
} from '../../redux/books/books-selectors';

export const TrainingPage = () => {
  // const [trainingBooks, setTrainingBooks] = useState(null);
  const trainingBooks = useSelector(getTrainingBooks);
  let allPages = 0;
  const daysLeft = useSelector(getDaysLeft);

  const startTraining = () => {
    trainingBooks.map(book => (allPages += book.pages));
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
