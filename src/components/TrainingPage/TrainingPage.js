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
// import Confetti from 'react-confetti';
import WellDoneModal from '../Modal/WellDoneModal/WellDoneModal';
// import CongratulationsModal from '../Modal/CongratulationsModal/CongratulationsModal';
// import useWindowSize from 'react-use/lib/useWindowSize';

export const TrainingPage = () => {
  const dispatch = useDispatch();
  const training = useSelector(getTraining);
  // const [oneBookRed, setOneBookRed] = useState(false);
  const [finishTrainingSuccess, setFinishTrainingSuccess] = useState(false);
  // const [conf, setConf] = useState(false);
  const [failTraining, setFailTraining] = useState(false);
  // const [bookId, setBookId] = useState(null);
  const books = useSelector(getAllBooks);
  // const { width, height } = useWindowSize();
  const start = useSelector(getStartTraining);
  const end = useSelector(getEndTraining);

  useEffect(() => {
    dispatch(operations.allBooks());
    dispatch(getTrainingData());
  }, [dispatch]);

  if (training.lenght !== 0) {
    const currentTraining = training.find(
      ({ end }) => new Date(end) > new Date()
    );
    // const dayStart = new Date(currentTraining.start);
    const dayEnd = new Date(currentTraining.end);
    // const daysLeft = Math.floor((dayEnd - dayStart) / 86400000);
    const trainingBooks = books.filter(book =>
      currentTraining.books.find(id => book._id === id)
    );
    let totalPages = 0;
    trainingBooks.map(el => (totalPages += el.pages));

    let resultPagesAmount = null;
    if (currentTraining.result.lenght !== 0) {
      currentTraining.result.map(el => (resultPagesAmount += Number(el.page)));
    }

    // if(resultPagesAmount) {
    //   totalPages <= resultPagesAmount && setFinishTrainingSuccess(true);
    //   totalPages <= resultPagesAmount && setConf(true);
    //   trainingBooks.map(book => {
    //     if (resultPagesAmount >= book.pages) {
    //       book.wish !== 'Already read' && setOneBookRed(true);
    //       book.wish !== 'Already read' && setBookId(book._id);
    //     };
    //   });
    // };
    new Date(dayEnd) <= new Date() && setFailTraining(true);
  }

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

      {finishTrainingSuccess && (
        <Modal>
          <WellDoneModal
            toggleWellDoneModal={setFinishTrainingSuccess}
            text={'Молодець!!! Усі книги прочитано! Тренування пройшло вдало!'}
          />
          {/* {conf && <Confetti width={width} height={height} />} */}
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
