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
import { getTraining } from '../../redux/books/books-selectors';
import { getTrainingData } from '../../redux/books/books-operations';

export const DesktopView = () => {
  const training = useSelector(getTraining);
  const dispatch = useDispatch();
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
              <TrainingButton
                type="submit"
                onSubmit={() => dispatch(getTrainingData())}
              >
                Почати тренування
              </TrainingButton>
            </>
          )}
          <LineChart />
        </Box>
        <Sidebar>
          <ResultSection />
          <MyGoal />
        </Sidebar>
      </TrainingBox>
    </>
  );
};
