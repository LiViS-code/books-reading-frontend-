// import { useState } from 'react';
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
export const TrainingPage = () => {
  const startTraining = () => {
    console.log();
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
