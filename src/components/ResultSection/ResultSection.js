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
import operations from '../../redux/asyncThunks';

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
  console.log(training);

  useEffect(() => {
    //Find books of currentTraining by
    console.log(books);
    console.log(1);
    console.log(training);
    const trainBooksAll = [];
    books.filter(b => {
      if (training.books.includes(b._id)) {
        trainBooksAll.push(b);
      }
      return trainBooksAll;
    });
    console.log(trainBooksAll);
    //Find only books with status "Reading now"
    const trainBooks = trainBooksAll.filter(
      ({ wish }) => wish === 'Reading now'
    );
    console.log(trainBooks);
    //Books already red during this training
    const booksRed = trainBooksAll.filter(
      ({ wish }) => wish === 'Already read'
    );
    console.log(booksRed);

    //Find amount of pages in current training
    let trainPages = 0;
    trainBooksAll.map(({ pages }) => (trainPages += Number(pages)));
    console.log(trainPages);
    //Find amount of alredy red pages from results
    let pagesRed = 0;
    training.result.map(({ page }) => (pagesRed += Number(page)));
    console.log(pagesRed);
    //Find amount of pages in already red books
    let pagesRedBooks = 0;
    booksRed.map(({ pages }) => (pagesRedBooks += Number(pages)));
    console.log(pagesRedBooks);
    //Pages for checking one more red book
    const p = pagesRed - pagesRedBooks;

    // Deadline result check
    const success = pagesRed >= trainPages;
    if (new Date(training.end) < new Date()) {
      !success && setFailTraining(true);
    }

    // Success result check
    if (success) {
      setFinishTrainingSuccess(true);
    }
    console.log(trainBooks, pagesRed, pagesRedBooks, p);

    trainBooks.map(b => {
      if (b.pages <= p) {
        console.log(22);
        if (b.wish !== 'Already read') {
          setOneBookRed(true);
          dispatch(changeBookStatus(b._id));
        }
      }
      return trainBooks;
    });
  }, [training]);
  // useEffect(() => {
  //   checkResults();
  // }, [dispatch, checkResults]);

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
          type="button"
          onClick={e => {
            if (!pages) {
              alert('Введіть кількість прочитаних сторінок');
              e.preventDefault();
            } else {
              dispatch(
                addResultToTraining({
                  date: new Date(),
                  page: pages,
                  id: training._id,
                })
              );
              dispatch(operations.allBooks());

              // checkResults({date: new Date(),
              //   page: pages});
              console.log(5);
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
