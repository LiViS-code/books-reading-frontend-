import { Countdown } from '../Datepickers';
import { Heading, TimingContainer } from './TrainingPage.styled';
export const TrainingPage = () => {
  return (
    <>
      <TimingContainer>
        <Heading>Моє тренування</Heading>
        <Countdown />
      </TimingContainer>
    </>
  );
};
