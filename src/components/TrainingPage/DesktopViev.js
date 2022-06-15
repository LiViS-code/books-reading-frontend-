import { Countdown } from '../Datepickers';
import {
  Heading,
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

export const DesktopView = () => {
  return (
    <>
      <TrainingBox>
        <Box>
          <TimingContainer>
            <Heading>Моє тренування</Heading>
            <Countdown />
          </TimingContainer>
          <Dropdown />
          <TrainLib />
          <TrainingButton>Почати тренування</TrainingButton>
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
