import { Countdown } from '../Datepickers';
import { Heading } from './TrainingPage.styled';
import ResultSection from '../ResultSection';
export const TrainingPage = () => {
  return (
    <>
      <Heading>Моє тренування</Heading>
      <Countdown />
      <ResultSection />
    </>
  );
};
