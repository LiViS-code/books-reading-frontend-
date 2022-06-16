// import { ReactComponent as Polygon } from '../../image/svg/Polygon.svg';
import { useSelector, useDispatch } from 'react-redux';
import Polygon from '../../image/svg/Polygon.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
import { Arrow } from '../Datepickers/Countdown/Calendar.styled';
import {
  DateButton,
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
import { addResultToTraining } from '../../redux/books/books-operations';

export default function ResultSection() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [pages, setPages] = useState(null);
  // const training = useSelector(getTraining);
  // console.log(training);
  // const trainingId = training ? training.data._id : null;
  // console.log(trainingId);

  const CustomInput = ({ value, onClick }) => (
    <DateButton onClick={onClick}>
      {value}
      <Arrow src={Polygon} alt="polygon" className={'icon'} />
    </DateButton>
  );
  const handleChange = e => {
    SetAmount(e.target.value);
    console.log(amount);
  };
  const addResult = e => {
    e.preventDefault();

    dispatch();
  };
  return (
    <Section>
      <Title>Результати</Title>
      <AddResult>
        <Label>
          <Text>Дата</Text>
          <div style={{ width: '110px' }}>
            <DatePicker
              selected={date}
              onChange={date => setDate(date)}
              customInput={<CustomInput />}
              includeDates={[new Date()]}
              value={date}
            />
          </div>
        </Label>
        <Label>
          <Text>Кількість сторінок</Text>
          <Pages onChange={e => setPages(e.target.value)} />
        </Label>
        const trainingId = training.data._id;
        <Button
          type="submit"
          onSubmit={() =>
            dispatch(addResultToTraining({ id: 22, date: date, pages: pages }))
          }
        >
          Додати результат
        </Button>
      </AddResult>
      <Statistic>СТАТИСТИКА</Statistic>
    </Section>
  );
}
