import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { getAllBooks } from '../../redux/selectors/user-selectors';
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
import Confetti from 'react-confetti';
import WellDoneModal from '../Modal/WellDoneModal/WellDoneModal';
// import CongratulationsModal from '../Modal/CongratulationsModal/CongratulationsModal';
import useWindowSize from 'react-use/lib/useWindowSize';

export const TrainingPage = () => {
  const [hidden, setIsHidden] = useState(true);
  const [finishTrainingSuccess, setFinishTrainingSuccess] = useState(false);
  const [failTraining, setFailTraining] = useState(false);
  // const [oneBookRed, setOneBookRed] = useState(false);
  // const [conf, setConf] = useState(false);

  const isMatches = useMediaQuery('(min-width: 768px)');
  const dispatch = useDispatch();
  const books = useSelector(getAllBooks);
  const training = useSelector(getTraining);
  const start = useSelector(getStartTraining);
  const end = useSelector(getEndTraining);
  const { width, height } = useWindowSize();

  useEffect(() => {
    dispatch(getTrainingData());
    let currentTraining = null;
    if (training.length !== 0) {
      let latestStart = training[0].start;
      training.map(({ start }) => {
        if (latestStart < start) {
          latestStart = start;
        }
      });
      currentTraining = training.find(({ start }) => start === latestStart);
      // To check fininshed trainig of not
      let totalPages = 0;
      books.map(({ _id, pages }) => {
        if (currentTraining.books.includes(_id)) {
          totalPages += pages;
        }
      });
      let pagesRed = 0;
      currentTraining.result.map(({ page }) => (pagesRed += Number(page)));
      const success = pagesRed >= totalPages;
      if (new Date(currentTraining.end) > new Date()) {
        success && setFinishTrainingSuccess(true);
      }
    }
  }, []);

  // To find current training in training array

  const toggleHidden = () => {
    setIsHidden(state => !state);
  };

  const startTraining = () => {
    dispatch(addTraining({ start, end }));
    // dispatch(getTrainingData());
  };

  const newTraining = () => {
    dispatch(startNewTraining());
  };

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

      {finishTrainingSuccess && (
        <Modal>
          <WellDoneModal
            toggleWellDoneModal={setFinishTrainingSuccess}
            text={'Молодець!!! Усі книги прочитано! Тренування пройшло вдало!'}
          />
          <Confetti width={width} height={height} />
        </Modal>
      )}

      {/* {oneBookRed && (
        <Modal>
          <CongratulationsModal
            toggleCongratulationsModal={setOneBookRed}
            id={bookId}
          />
        </Modal>
      )} */}

      {failTraining && (
        <Modal>
          <WellDoneModal
            toggleWellDoneModal={setFailTraining}
            text={
              'Ти молодчина, але потрібно швидше! Наступного разу тобі все вдасться'
            }
          />
        </Modal>
      )}
    </>
  );
};
