import endOfYear from 'date-fns/endOfYear';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
import {
  startTraining,
  endTraining,
} from '../../../redux/books/books-operations';

export const Countdown = () => {
  const dispatch = useDispatch();
  const yearEnd = endOfYear(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState('');
  const currentDate = new Date().getTime();

  useEffect(() => {
    dispatch(startTraining(startDate));
    dispatch(endTraining(endDate));
  });

  const CustomInput = ({ value, onClick }) => (
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
        <>
          <Heading>Моє тренування</Heading>
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
        </>
      )}
    </>
  );
};
