import {
  MyGoalContainer,
  GoalTitle,
  CounterWrapper,
  CounterNumber,
  Counter,
  CounterLabelContainer,
  CounterLabel,
} from './MyGoal.styled';

const MyGoal = () => {
  return (
    <MyGoalContainer>
      <GoalTitle>Моя мета прочитати</GoalTitle>
      <CounterWrapper>
        <Counter>
          <CounterNumber>0</CounterNumber>
        </Counter>
        <Counter>
          <CounterNumber>0</CounterNumber>
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
