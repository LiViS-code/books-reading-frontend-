import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Countdown, CountdownTraining } from '../Datepickers';
import {
  TimingContainer,
  TrainingButton,
  NewTrainingPage,
} from './TrainingPage.styled';
import { ButtonAdd } from '../../views/LibraryView';
import MyGoal from '../MyGoal';
import LineChart from '../LineChart/LineChart';
import { TrainLib } from './Library/TrainLib';
import ResultSection from '../ResultSection';
import { Dropdown } from './Select/Select';
import {
  getStartTraining,
  getEndTraining,
  getTraining,
} from '../../redux/books/books-selectors';
import {
  addTraining,
  getTrainingData,
  startNewTraining,
} from '../../redux/books/books-operations';
import operations from '../../redux/asyncThunks';
import { useMediaQuery } from '../Header/hooks/useMediaQuery';
import sprite from '../../views/LibraryView/symbol-defs.svg';
import Modal from '../Modal/Modal';
import { NewTraining } from '../Modal/WellDoneModal/WellDoneModal.styled';

export const TrainingPage = () => {
  const dispatch = useDispatch();
  const training = useSelector(getTraining);

  useEffect(() => {
    dispatch(operations.allBooks());
    dispatch(getTrainingData());
  }, [dispatch]);

  const start = useSelector(getStartTraining);
  const end = useSelector(getEndTraining);

  const startTraining = () => {
    dispatch(addTraining({ start, end }));
    dispatch(getTrainingData());
  };

  const newTraining = () => {
    dispatch(startNewTraining());
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
          {training.length === 0 ? <Countdown /> : <CountdownTraining />}
        </TimingContainer>
      )}
      {!hidden && (
        <Modal onClose={toggleHidden}>
          <TimingContainer style={{ width: '280px;', height: '100vw;' }}>
            {training.length === 0 ? <Countdown /> : <CountdownTraining />}
          </TimingContainer>
        </Modal>
      )}
      {training.length === 0 && (
        <>
          <Dropdown />
          <div style={{ maxWidth: '928px' }}>
            <TrainLib />
          </div>
        </>
      )}

      {training.length === 0 && (
        <TrainingButton type="button" onClick={startTraining}>
          Почати тренування
        </TrainingButton>
      )}

      {training.length !== 0 && <LineChart />}

      <ButtonAdd type="button" onClick={toggleHidden}>
        <svg width={16} height={16}>
          <use href={`${sprite}#plus`} />
        </svg>
      </ButtonAdd>

      {training.length !== 0 && <ResultSection />}

      {training.length !== 0 && (
        <NewTrainingPage>
          <NewTraining
            type="submit"
            onClick={() => {
              newTraining();
            }}
          >
            Нове тренування
          </NewTraining>
        </NewTrainingPage>
      )}
    </>
  );
};
