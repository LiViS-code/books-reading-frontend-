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
import { resultsTraining } from '../../redux/books/books-operations';

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
  const training = useSelector(getTraining);
  const dayStart = new Date(training.start);
  const dayEnd = new Date(training.end);
  const results = training.result;
  const books = useSelector(getAllBooks);

  const trainingBooks = books.filter(book =>
    training.books.find(id => book._id === id)
  );

  let totalPages = 0;
  trainingBooks.map(el => (totalPages += el.pages));

  let pagesRed = 0;

  const planPages = [];
  results.map(res => {
    const daysToEnd = Math.floor((dayEnd - new Date(res.date)) / 86400000);
    pagesRed += Number(res.page);
    const pagesLeft = totalPages - pagesRed;
    const plan = pagesLeft / daysToEnd;
    planPages.push(plan);
  });

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

  const labels = results.map(
    result => Math.floor((new Date(result.date) - dayStart) / 86400000) + 1
  );

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
  const today = Math.ceil((new Date() - dayStart) / 86400000 + 1);

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
