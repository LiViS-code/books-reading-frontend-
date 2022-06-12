import { useState } from 'react';
import { Countdown } from '../Datepickers';
import {
  Heading,
  TimingContainer,
  TrainingButton,
} from './TrainingPage.styled';
export const TrainingPage = (startdate, deadline) => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState('');

  const startTraining = () => {
    console.log({ deadline });
  };
  return (
    <>
      <TimingContainer>
        <Heading>Моє тренування</Heading>
        <Countdown deadline={deadline} start={startdate} />
      </TimingContainer>
      <TrainingButton onClick={startTraining}>Почати тренування</TrainingButton>
    </>
  );
};
