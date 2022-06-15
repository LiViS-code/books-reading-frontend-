import { useState } from 'react';
import { Countdown } from '../Datepickers';
import { TimingContainer, TrainingButton } from './TrainingPage.styled';
import { ButtonAdd } from '../../views/LibraryView';
import MyGoal from '../MyGoal';
import LineChart from '../LineChart/LineChart';
import { TrainLib } from './Library/TrainLib';
import ResultSection from '../ResultSection';
import { Dropdown } from './Select/Select';
import { useMediaQuery } from '../Header/hooks/useMediaQuery';
import sprite from '../../views/LibraryView/symbol-defs.svg';
import Modal from '../Modal/Modal';

export const TrainingPage = () => {
  const startTraining = () => {
    console.log();
  };
  const [hidden, setIsHidden] = useState(true);
  const toggleHidden = () => {
    setIsHidden(state => !state);
  };
  const isMatches = useMediaQuery('(min-width: 768px)');
  return (
    <>
      <MyGoal />
      {isMatches && (
        <TimingContainer>
          <Countdown />
        </TimingContainer>
      )}
      {!hidden && (
        <Modal onClose={toggleHidden}>
          <TimingContainer>
            <Countdown />
          </TimingContainer>
        </Modal>
      )}
      <Dropdown />
      <div style={{ maxWidth: '928px' }}>
        <TrainLib />
      </div>

      <TrainingButton onClick={startTraining}>Почати тренування</TrainingButton>
      <LineChart />
      <ButtonAdd type="button" onClick={toggleHidden}>
        <svg width={16} height={16}>
          <use href={`${sprite}#plus`} />
        </svg>
      </ButtonAdd>
      <ResultSection />
    </>
  );
};
