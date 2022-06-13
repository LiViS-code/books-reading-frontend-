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

export const DesktopView = () => {
  return (
    <>
      <TrainingBox>
        <Box>
          <TimingContainer>
            <Heading>Моє тренування</Heading>
            <Countdown />
          </TimingContainer>
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
