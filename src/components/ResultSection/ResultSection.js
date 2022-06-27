import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
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
import { getTraining, getOneBookRed } from '../../redux/books/books-selectors';
import {
  addResultToTraining,
  changeBookStatus,
} from '../../redux/books/books-operations';
import ResultData from './ResultData';
import Modal from '../Modal/Modal';
import WellDoneModal from '../Modal/WellDoneModal/WellDoneModal';
import Confetti from 'react-confetti';
import { getAllBooks } from '../../redux/selectors/user-selectors';
import useWindowSize from 'react-use/lib/useWindowSize';
import operations from '../../redux/asyncThunks';
import CongratulationsModal from '../Modal/CongratulationsModal/CongratulationsModal';

export default function ResultSection() {
  const [pages, setPages] = useState(null);
  const [finishTrainingSuccess, setFinishTrainingSuccess] = useState(false);
  const [failTraining, setFailTraining] = useState(false);
  const oneBookRed = useSelector(getOneBookRed);
  const { width, height } = useWindowSize();
  const training = useSelector(getTraining);
  const books = useSelector(getAllBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.allBooks());
  }, [dispatch]);

  useEffect(() => {
    //Find books of current training by id
    const trainBooksAll = [];
    books.filter(b => {
      if (training.books.includes(b._id)) {
        trainBooksAll.push(b);
      }
      return trainBooksAll;
    });
    //Find only books with status "Reading now"
    const trainBooks = trainBooksAll.filter(
      ({ wish }) => wish === 'Reading now'
    );
    //Books already red during this training
    const booksRed = trainBooksAll.filter(
      ({ wish }) => wish === 'Already read'
    );
    // Find amount of pages in current training
    let trainPages = 0;
    trainBooksAll.map(({ pages }) => (trainPages += Number(pages)));
    //Find amount of already red pages from results
    let pagesRed = 0;
    training.result.map(({ page }) => (pagesRed += Number(page)));
    //Find amount of pages in already red books
    let pagesRedBooks = 0;
    booksRed.map(({ pages }) => (pagesRedBooks += Number(pages)));
    //Pages for checking one more red book
    const p = pagesRed - pagesRedBooks;
    //DeadlineResultCheck
    const success = pagesRed >= trainPages;
    if (new Date(training.end) < new Date()) {
      !success && setFailTraining(true);
    }

    if (trainBooks[0]) {
      if (trainBooks[0].pages <= p) {
        if (trainBooks[0].wish !== 'Already read') {
          dispatch(changeBookStatus(trainBooks[0]._id));
          dispatch(operations.allBooks());
        }
      }
    }

    //Success result check
    if (success) {
      setFinishTrainingSuccess(true);
    }
  }, [training, books, dispatch]);

  return (
    <Section>
      <Title>Результати</Title>
      <AddResult>
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
          <CongratulationsModal />
        </Modal>
      )}
    </Section>
  );
}
