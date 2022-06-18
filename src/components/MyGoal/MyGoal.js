import { useSelector, useDispatch } from 'react-redux';
import {
  MyGoalContainer,
  GoalTitle,
  CounterWrapper,
  CounterNumber,
  Counter,
  CounterLabelContainer,
  CounterLabel,
} from './MyGoal.styled';
import { getTraining, getTrainingId } from '../../redux/books/books-selectors';
import { getTrainingData } from '../../redux/books/books-operations';

const MyGoal = ({ currentTraining }) => {
  // const [days, setDays] = useState(0);
  // const [booksNumber, setBooksNumber] = useState(0);
  let days = 0;
  let booksNumber = 0;
  console.log(3);
  const dispatch = useDispatch();
  // dispatch(getTrainingData);
  const training = useSelector(getTraining);

  if (training.length !== 0) {
    const { start, end, books } = currentTraining;
    // console.log(new Date(), new Date(end), new Date() < new Date(end));
    const dayStart = new Date(start);
    const dayEnd = new Date(end);
    const daysLeft = Math.floor((dayEnd - dayStart) / 86400000);
    const bookAmount = books.length;
    days = daysLeft;
    booksNumber = bookAmount;
  }

  return (
    <MyGoalContainer>
      <GoalTitle>Моя мета прочитати</GoalTitle>
      <CounterWrapper>
        <Counter>
          <CounterNumber>{booksNumber || 0}</CounterNumber>
        </Counter>
        <Counter>
          <CounterNumber>{days || 0}</CounterNumber>
        </Counter>
        <CounterLabelContainer>
          <CounterLabel>Кількість книжок</CounterLabel>
          <CounterLabel>Кількість днів</CounterLabel>
        </CounterLabelContainer>
      </CounterWrapper>
    </MyGoalContainer>
  );
};

export default MyGoal;
