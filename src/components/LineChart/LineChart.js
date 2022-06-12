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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const results = [
  { day: 1, pages: 3 },
  { day: 3, pages: 4 },
  { day: 6, pages: 2 },
  { day: 7, pages: 5 },
  { day: 10, pages: 7 },
  { day: 12, pages: 5 },
  { day: 13, pages: 8 },
  { day: 15, pages: 6 },
];

export default function LineChart() {
  const options = {
    borderWidth: '2',
    radius: '4',
    tension: '0.3',
    plugins: {
      legend: {
        position: 'top',
      },
      // title: {
      //   display: true,
      //   text: 'Кількість сторінок / день ',
      // },
    },
  };
  const labels = results.map(result => result.day);
  const data = {
    labels,
    datasets: [
      {
        label: 'ФАКТ',
        data: results.map(result => result.pages),
        borderColor: '#FF6B08',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'ПЛАН',
        data: [5, 7, 4, 5, 6, 5, 8, 5],
        borderColor: '#242A37',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  const days = 4;

  return (
    <ChartContainer>
      <TitleContainer>
        <TitleChart>Кількість сторінок / день </TitleChart>
        <DayNumber>{days}</DayNumber>
      </TitleContainer>

      <Line data={data} options={options}></Line>
    </ChartContainer>
  );
}
