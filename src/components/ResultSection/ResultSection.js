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
  Labels,
  Label,
  Pages,
  ButtonSection,
  Button,
  Statistic,
} from './ResultSection.styled';

export default function ResultSection() {
  const [date, setDate] = useState(new Date());

  const CustomInput = ({ value, onClick }, ref) => (
    <DateButton onClick={onClick}>
      {value}
      <Arrow src={Polygon} alt="polygon" />
    </DateButton>
  );

  return (
    <Section>
      <Title>Результати</Title>
      <AddResult>
        <Labels>
          <Label>
            <Text>Дата</Text>
            <div style={{ width: '110px' }}>
              <DatePicker
                selected={date}
                onChange={date => setDate(date)}
                customInput={<CustomInput />}
                value={date}
              />
            </div>
          </Label>

          <Label>
            <Text>Кількість сторінок</Text>
            <Pages />
          </Label>
        </Labels>
        <ButtonSection>
          <Button type="submit">Add Result</Button>
        </ButtonSection>
      </AddResult>
      <Statistic>STATISTIC</Statistic>
    </Section>
  );
}
