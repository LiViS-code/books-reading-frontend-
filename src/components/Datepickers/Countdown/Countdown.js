import endOfYear from 'date-fns/endOfYear';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  getTraining,
  getTrainingId,
} from '../../../redux/books/books-selectors';
import {
  startTraining,
  endTraining,
} from '../../../redux/books/books-operations';

export const Countdown = ({ currentTraining }) => {
  const dispatch = useDispatch();
  const yearEnd = endOfYear(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const currentDate = new Date().getTime();
  const training = useSelector(getTraining);
  console.log(4);
  useEffect(() => {
    if (training.length !== 0) {
      const { start, end } = currentTraining;
      setEndDate(new Date(end));
      setStartDate(new Date(start));
    }
  }, []);

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
                onChange={date => {
                  setStartDate(date);
                  dispatch(startTraining(date));
                }}
                includeDates={[new Date()]}
                customInput={<CustomInput />}
                value={'Початок'}
                width="250px"
              />
            </div>
            <div style={{ maxWidth: '280px' }}>
              <DatePicker
                selected={endDate}
                onChange={date => {
                  setEndDate(date);
                  dispatch(endTraining(date));
                }}
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
