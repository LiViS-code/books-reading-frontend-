import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { getTrainingData } from '../../redux/books/books-operations';

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
  const dispatch = useDispatch();
  const training = useSelector(getTraining);
  dispatch(getTrainingData);

  const currentTraining = training.find(
    ({ end }) => new Date(end) > new Date()
  );
  const dayStart = new Date(currentTraining.start);
  const dayEnd = new Date(currentTraining.end);
  const daysLeft = Math.floor((dayEnd - dayStart) / 86400000);

  const books = useSelector(getAllBooks);
  const trainingBooks = books.filter(book =>
    training.books.find(id => book._id === id)
  );

  let totalPages = 0;
  trainingBooks.map(el => (totalPages += el.pages));
  const pagesForDay = totalPages / daysLeft;

  let resultPagesAmount = null;
  if (currentTraining.result.lenght !== 0) {
    currentTraining.result.map(el => (resultPagesAmount += Number(el.page)));
  }
  const planDays = [];
  for (let i = 1; i <= daysLeft; i++) {
    planDays.push(i);
  }

  const planPages = Array(daysLeft).fill(pagesForDay);

  const results = training.result;
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
        data: results.map(result => Number(result.page)),
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
    <ChartContainer>
      <TitleContainer>
        <TitleChart>Кількість сторінок / день </TitleChart>
        <DayNumber>{today}</DayNumber>
      </TitleContainer>
      <Line data={data} options={options}></Line>
    </ChartContainer>
  );
}
