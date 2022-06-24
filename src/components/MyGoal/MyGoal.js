import { useSelector } from 'react-redux';
import {
  MyGoalContainer,
  GoalTitle,
  CounterWrapper,
  CounterNumber,
  Counter,
  CounterLabelContainer,
  CounterLabel,
} from './MyGoal.styled';
import { getTraining } from '../../redux/books/books-selectors';

const MyGoal = () => {
  let days = 0;
  let booksNumber = 0;
  const training = useSelector(getTraining);

  if (training.length !== 0) {
    const { start, end, books } = training;
    days = Math.floor((new Date(end) - new Date(start)) / 86400000);
    booksNumber = books.length;
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
