// import { ReactComponent as Polygon } from '../../image/svg/Polygon.svg';
import Polygon from '../../image/svg/Polygon.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
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
import { useDispatch } from 'react-redux';

export default function ResultSection() {
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  const [amount, SetAmount] = useState(null);

  const CustomInput = ({ value, onClick }, ref) => (
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
          <Pages onChange={handleChange} />
        </Label>

        <Button type="submit" onClick={addResult}>
          Додати результат
        </Button>
      </AddResult>
      <Statistic>СТАТИСТИКА</Statistic>
    </Section>
  );
}
