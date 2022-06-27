import { useSelector } from 'react-redux';
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

export const DesktopView = () => {
  const training = useSelector(getTraining);

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
              <TrainingButton>Почати тренування</TrainingButton>
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
