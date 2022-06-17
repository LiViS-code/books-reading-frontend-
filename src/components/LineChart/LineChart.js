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
// import { getDaysLeft } from '../../redux/books/books-selectors';
import { getTraining } from '../../redux/books/books-selectors';
import { getAllBooks } from '../../redux/selectors/user-selectors';

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
  const IdBooksInTraining = training.training[0].books;

  const { start, end } = training.training[0];
  const dayStart = new Date(start);
  const dayEnd = new Date(end);
  const daysLeft = Math.floor((dayEnd - dayStart) / 86400000);

  const books = useSelector(getAllBooks);
  const trainingBooks = books.filter(book =>
    IdBooksInTraining.find(id => book._id === id)
  );

  let totalPages = 0;
  trainingBooks.map(el => (totalPages += el.pages));
  const pagesForDay = totalPages / daysLeft;

  const planDays = [];
  for (let i = 1; i < daysLeft; i++) {
    planDays.push(i);
  }
  // const planData = planDays.map(el => ({"day": el, "pages": pagesForDay}));

  const planPages = Array(daysLeft).fill(pagesForDay);

  const results = training.training[0].result;

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
    <ChartContainer>
      <TitleContainer>
        <TitleChart>Кількість сторінок / день </TitleChart>
        <DayNumber>{today}</DayNumber>
      </TitleContainer>

      <Line data={data} options={options}></Line>
    </ChartContainer>
  );
}
