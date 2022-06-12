// import { useState } from 'react';
import { Countdown } from '../Datepickers';
import {
  Heading,
  TimingContainer,
  TrainingButton,
  TrainingBox,
} from './TrainingPage.styled';
import MyGoal from '../MyGoal';
import { TrainLib } from './Library/TrainLib';
import ResultSection from '../ResultSection';
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

      <TrainLib />

      <TrainingButton onClick={startTraining}>Почати тренування</TrainingButton>

      <ResultSection />
    </>
  );
};
