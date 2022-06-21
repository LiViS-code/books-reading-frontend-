// import { ReactComponent as Polygon } from '../../image/svg/Polygon.svg';
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
  getTrainingData,
  trainingResult,
  addTrainingResult,
} from '../../redux/books/books-operations';
import ResultData from './ResultData';

export default function ResultSection() {
  const [pages, setPages] = useState(null);
  const training = useSelector(getTraining);
  const dispatch = useDispatch();
  // const [date, setDate] = useState(new Date());
  // const [amount, SetAmount] = useState(null);
  let currentTraining = null;

  if (training.length !== 0) {
    let latestStart = training[0].start;
    training.map(({ start }) => {
      if (latestStart < start) {
        latestStart = start;
      }
    });
    currentTraining = training.find(({ start }) => start === latestStart);
    console.log(currentTraining.result);
  }

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
          type="submit"
          onClick={e => {
            if (!pages) {
              alert('Введіть кількість прочитаних сторінок');
              e.preventDefault();
            } else {
              dispatch(
                addResultToTraining({
                  date: new Date(),
                  page: pages,
                  id: currentTraining._id,
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
    </Section>
  );
}
