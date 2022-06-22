import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Countdown, CountdownTraining } from '../Datepickers';
import { TimingContainer, TrainingButton } from './TrainingPage.styled';
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
import { useMediaQuery } from '../Header/hooks/useMediaQuery';
import sprite from '../../views/LibraryView/symbol-defs.svg';
import back from '../../image/svg/back.svg';
import Modal from '../Modal/Modal';
import {
  WhiteContainer,
  Back,
  ButtonBack,
} from '../../components/Modal/Modal.styled';

export const TrainingPage = () => {
  const [hidden, setIsHidden] = useState(true);
  // const [conf, setConf] = useState(false);

  const isMatches = useMediaQuery('(min-width: 768px)');
  const dispatch = useDispatch();
  const training = useSelector(getTraining);
  const start = useSelector(getStartTraining);
  const end = useSelector(getEndTraining);

  useEffect(() => {
    dispatch(getTrainingData());
    // let currentTraining = null;
    if (training.length !== 0) {
      let latestStart = training[0].start;
      training.map(({ start }) => {
        if (latestStart < start) {
          latestStart = start;
        }
        return latestStart;
      });
      // currentTraining = training.find(({ start }) => start === latestStart);
    }
  }, []);

  // To find current training in training array

  const toggleHidden = () => {
    setIsHidden(state => !state);
  };

  const startTraining = () => {
    dispatch(addTraining({ start, end }));
  };

  // const newTraining = () => {
  //   dispatch(startNewTraining());
  // };

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
          <WhiteContainer>
            <ButtonBack onClick={toggleHidden}>
              <Back src={back} alt="back" />
            </ButtonBack>
            <TimingContainer style={{ width: '280px;', height: '100vw;' }}>
              {training.length === 0 ? <Countdown /> : <CountdownTraining />}
            </TimingContainer>
          </WhiteContainer>
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
        <TrainingButton type="button" onClick={() => startTraining()}>
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
    </>
  );
};
