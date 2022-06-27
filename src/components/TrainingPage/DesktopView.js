import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Countdown, CountdownTraining } from '../Datepickers';
import {
  TimingContainer,
  TrainingButton,
  TrainingBox,
  Sidebar,
  Box,
} from './TrainingPage.styled';
import MyGoal from '../MyGoal';
import LineChart from '../LineChart/LineChart';
import { TrainLib } from './Library/TrainLib';
import ResultSection from '../ResultSection';
import { Dropdown } from './Select/Select';
import {
  getTraining,
  getStartTraining,
  getEndTraining,
} from '../../redux/books/books-selectors';
import {
  addTraining,
  getTrainingData,
} from '../../redux/books/books-operations';
import operations from '../../redux/asyncThunks';

export const DesktopView = () => {
  const training = useSelector(getTraining);
  const start = useSelector(getStartTraining);
  const end = useSelector(getEndTraining);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.allBooks());
    dispatch(getTrainingData());
  }, [dispatch]);

  const startTraining = () => {
    dispatch(addTraining({ start, end }));
  };

  return (
    <>
      <TrainingBox>
        <Box>
          <TimingContainer>
            {training.length === 0 ? <Countdown /> : <CountdownTraining />}
          </TimingContainer>

          {training.length === 0 && (
            <>
              <Dropdown />
              <TrainLib />
              <TrainingButton onClick={() => startTraining()}>
                Почати тренування
              </TrainingButton>
            </>
          )}

          {training.length !== 0 && <LineChart />}
        </Box>

        <Sidebar>
          {training.length !== 0 && <ResultSection />}
          <MyGoal />
        </Sidebar>
      </TrainingBox>
    </>
  );
};
