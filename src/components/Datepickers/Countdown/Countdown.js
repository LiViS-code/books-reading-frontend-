import endOfYear from 'date-fns/endOfYear';
import { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Timer } from '../Timer/Timer';
import {
  DatePickerWrapper,
  DateButton,
  Icon,
  TimerWrapper,
  TimeBlock,
  Arrow,
  Heading,
} from './Calendar.styled';
import calendar from '../../../image/svg/calendar.svg';
import Polygon from '../../../image/svg/Polygon.svg';

export const Countdown = () => {
  const yearEnd = endOfYear(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState('');
  const currentDate = new Date().getTime();

  const CustomInput = ({ value, onClick }, ref) => (
    <DateButton onClick={onClick}>
      <Icon src={calendar} alt="calendar" />
      {value}
      <Arrow src={Polygon} alt="polygon" />
    </DateButton>
  );
  return (
    <>
      {endDate && (
        <>
          <Heading>Моє тренування</Heading>
          <TimerWrapper>
            <TimeBlock>
              <>До закінчення року залишилось</>
              <Timer deadline={yearEnd} startdate={currentDate} />
            </TimeBlock>
            <TimeBlock>
              <>До досягнення мети залишилось</>
              <Timer deadline={endDate} startdate={startDate} />
            </TimeBlock>
          </TimerWrapper>
        </>
      )}
      {!endDate && (
        <DatePickerWrapper>
          <div style={{ maxWidth: '280px' }}>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              includeDates={[new Date()]}
              customInput={<CustomInput />}
              value={'Початок'}
              width="250px"
            />
          </div>
          <div style={{ maxWidth: '280px' }}>
            <DatePicker
              selected={endDate}
              onChange={date => setEndDate(date)}
              minDate={new Date()}
              customInput={<CustomInput />}
              value={'Завершення'}
            />
          </div>
        </DatePickerWrapper>
      )}
    </>
  );
};
