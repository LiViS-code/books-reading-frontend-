import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  ChartContainer,
  TitleChart,
  DayNumber,
  TitleContainer,
} from './LineChart.styled';
import { getTraining } from '../../redux/books/books-selectors';
import { getAllBooks } from '../../redux/selectors/user-selectors';
import WellDoneModal from '../Modal/WellDoneModal/WellDoneModal';
import CongratulationsModal from '../Modal/CongratulationsModal/CongratulationsModal';
import Modal from '../Modal/Modal';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  // const dispatch = useDispatch();
  const [oneBookRed, setOneBookRed] = useState(false);
  const [bookId, setBookId] = useState(null);
  const [finishTrainingSuccess, setFinishTrainingSuccess] = useState(false);
  const [conf, setConf] = useState(false);
  const [failTraining, setFailTraining] = useState(false);
  const training = useSelector(getTraining);

  const currentTraining = training.find(
    ({ end }) => new Date(end) > new Date()
  );
  const dayStart = new Date(currentTraining.start);
  const dayEnd = new Date(currentTraining.end);
  const daysLeft = Math.floor((dayEnd - dayStart) / 86400000);

  const books = useSelector(getAllBooks);
  const trainingBooks = books.filter(book =>
    currentTraining.books.find(id => book._id === id)
  );

  let totalPages = 0;
  trainingBooks.map(el => (totalPages += el.pages));
  const pagesForDay = totalPages / daysLeft;

  let resultPagesAmount = 0;
  currentTraining.result.map(el => (resultPagesAmount += Number(el.page)));

  const { width, height } = useWindowSize();

  useEffect(() => {
    totalPages <= resultPagesAmount && setFinishTrainingSuccess(true);
    setConf(true);
  }, [totalPages, resultPagesAmount]);

  trainingBooks.map(book => {
    if (resultPagesAmount >= book.pages) {
      book.wish !== 'Already read' && setOneBookRed(true);
      book.wish !== 'Already read' && setBookId(book._id);
    }

    new Date(dayEnd) <= new Date() && setFailTraining(true);
    return dayEnd;
  });

  const planDays = [];
  for (let i = 1; i < daysLeft; i++) {
    planDays.push(i);
  }

  const planPages = Array(daysLeft).fill(pagesForDay);

  const results = currentTraining.result;

  const options = {
    borderWidth: '2',
    radius: '4',
    tension: '0.3',
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  const labels = planDays;
  const data = {
    labels,
    datasets: [
      {
        label: 'ФАКТ',
        data: results.map(result => result.page),
        borderColor: '#FF6B08',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'ПЛАН',
        data: planPages,
        borderColor: '#242A37',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  const today = Math.ceil((new Date() - dayStart) / 86400000);

  return (
    <>
      <ChartContainer>
        <TitleContainer>
          <TitleChart>Кількість сторінок / день </TitleChart>
          <DayNumber>{today}</DayNumber>
        </TitleContainer>

        <Line data={data} options={options}></Line>
      </ChartContainer>

      {finishTrainingSuccess && (
        <Modal>
          <WellDoneModal
            toggleWellDoneModal={setFinishTrainingSuccess}
            text={'Молодець!!! Усі книги прочитано! Тренування пройшло вдало!'}
          />
          {conf && <Confetti width={width} height={height} />}
        </Modal>
      )}

      {oneBookRed && (
        <Modal>
          <CongratulationsModal
            toggleCongratulationsModal={setOneBookRed}
            id={bookId}
          />
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
    </>
  );
}
