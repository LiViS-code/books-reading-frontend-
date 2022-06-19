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
import { getTraining } from '../../../redux/books/books-selectors';
import {
  startTraining,
  endTraining,
} from '../../../redux/books/books-operations';

export const CountdownTraining = () => {
  //   const dispatch = useDispatch();
  const training = useSelector(getTraining);
  const currentTraining = training.find(
    ({ end }) => new Date(end) > new Date()
  );

  //   const [startDate, setStartDate] = useState(new Date());
  //   const [endDate, setEndDate] = useState(null);
  const yearEnd = endOfYear(new Date());

  const { start, end } = currentTraining;
  const startDate = new Date(start);
  const endDate = new Date(end);

  const currentDate = new Date().getTime();
  //   const training = useSelector(getTraining);

  return (
    <>
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
    </>
  );
};
