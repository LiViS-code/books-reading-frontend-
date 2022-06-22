// import { ReactComponent as Polygon } from '../../image/svg/Polygon.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import {
  Title,
  Text,
  Section,
  AddResult,
  Label,
  Pages,
  Button,
  Statistic,
} from './ResultSection.styled';
import { getTraining } from '../../redux/books/books-selectors';
import {
  addResultToTraining,
  changeBookStatus,
  getTrainingData,
} from '../../redux/books/books-operations';
import ResultData from './ResultData';
import Modal from '../Modal/Modal';
import WellDoneModal from '../Modal/WellDoneModal/WellDoneModal';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { getAllBooks } from '../../redux/selectors/user-selectors';
import CongratulationsModal from '../Modal/CongratulationsModal/CongratulationsModal';

export default function ResultSection() {
  const [pages, setPages] = useState(null);
  const [finishTrainingSuccess, setFinishTrainingSuccess] = useState(false);
  const [failTraining, setFailTraining] = useState(false);
  const [oneBookRed, setOneBookRed] = useState(false);
  const { width, height } = useWindowSize();
  const training = useSelector(getTraining);
  const books = useSelector(getAllBooks);
  const dispatch = useDispatch();
  // const [date, setDate] = useState(new Date());
  // const [amount, SetAmount] = useState(null);

  //Find current training
  let currentTraining = null;
  if (training.length !== 0) {
    let latestStart = training[0].start;
    training.map(({ start }) => {
      if (latestStart < start) {
        latestStart = start;
      }
      return latestStart;
    });
    currentTraining = training.find(({ start }) => start === latestStart);
  }

  const checkResults = () => {
    dispatch(getTrainingData);
    console.log(training);
    console.log(currentTraining);
    //Find books of currentTraining by id
    const trainBooksAll = [];
    books.filter(b => {
      if (currentTraining.books.includes(b._id)) {
        trainBooksAll.push(b);
      }
      return trainBooksAll;
    });

    //Find only books with status "Reading now"
    const trainBooks = trainBooksAll.filter(
      ({ wish }) => wish === 'Reading now'
    );

    //Books already red during this training
    const booksRed = trainBooksAll.filter(({ wish }) => wish === 'Already red');

    //Find amount of pages in current training
    let trainPages = 0;
    trainBooksAll.map(({ pages }) => (trainPages += Number(pages)));

    //Find amount of alredy red pages from results
    let pagesRed = 0;
    currentTraining.result.map(({ page }) => (pagesRed += Number(page)));

    //Find amount of alredy red pages by books
    let pagesRedBooks = 0;
    booksRed.map(({ pages }) => (pagesRedBooks += Number(pages)));

    //Pages for checking one more red book
    const p = pagesRed - pagesRedBooks;

    //Deadline result check
    const success = pagesRed >= trainPages;
    if (new Date(currentTraining.end) < new Date()) {
      !success && setFailTraining(true);
    }

    //Success result check
    if (success) {
      setFinishTrainingSuccess(true);
    }

    trainBooks.map(b => {
      if (b.pages < p) {
        if (b.wish !== 'Already read') {
          dispatch(changeBookStatus(b._id));
        }
      }
      return trainBooks;
    });
  };

  useEffect(() => {
    checkResults();
  }, [dispatch, checkResults]);

  // const CustomInput = ({ value, onClick }) => (
  //   <DateButton onClick={onClick}>
  //     {value}
  //     <Arrow src={Polygon} alt="polygon" className={'icon'} />
  //   </DateButton>
  // );
  // const handleChange = e => {
  //   SetAmount(e.target.value);
  //   console.log(amount);
  // };
  // const addResult = e => {
  //   e.preventDefault();

  //   dispatch();
  // };
  return (
    <Section>
      <Title>Результати</Title>
      <AddResult>
        {/* <Label>
          <Text>Дата</Text>
          <div style={{ width: '110px' }}>
            <DatePicker
              selected={date}
              onChange={date => console.log(date)}
              customInput={<CustomInput />}
              includeDates={[new Date()]}
              value={date}
            />
          </div>
        </Label> */}
        <Label>
          <Text>Кількість сторінок</Text>
          <Pages onChange={e => setPages(e.target.value)} />
        </Label>

        <Button
          type="submit"
          onClick={e => {
            if (!pages) {
              alert('Введіть кількість прочитаних сторінок');
              e.preventDefault();
            } else {
              // setOneBookRed(true);
              dispatch(
                addResultToTraining({
                  date: new Date(),
                  page: pages,
                  id: currentTraining._id,
                })
              );
            }
          }}
        >
          Додати результат
        </Button>
      </AddResult>
      <Statistic>СТАТИСТИКА</Statistic>
      <ResultData />
      {finishTrainingSuccess && (
        <Modal>
          <WellDoneModal
            toggleWellDoneModal={setFinishTrainingSuccess}
            text={'Молодець!!! Усі книги прочитано! Тренування пройшло вдало!'}
          />
          <Confetti width={width} height={height} />
        </Modal>
      )}

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

      {oneBookRed && (
        <Modal>
          <CongratulationsModal
            toggleCongratulationsModal={setOneBookRed}
            // id={bookId}
          />
        </Modal>
      )}
    </Section>
  );
}
