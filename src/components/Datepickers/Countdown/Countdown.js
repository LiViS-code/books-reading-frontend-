import endOfYear from 'date-fns/endOfYear';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { Timer } from '../Timer/Timer';
import {
  CalendarWrapper,
  DatePickerWrapper,
  DatePicker,
  Icon,
  TimerWrapper,
  TimeBlock,
  Arrow,
} from './Calendar.styled';
import calendar from '../../../image/svg/calendar.svg';
import Polygon from '../../../image/svg/Polygon.svg';

export const Countdown = () => {
  const yearEnd = endOfYear(new Date());
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isHidden, setIsHidden] = useState(true);

  console.log(date);
  const currentDate = new Date().getTime();

  const toggleCalendar = () => {
    setIsHidden(isHidden => !isHidden);
  };

  const setInterval = () => {
    if (!startDate) {
      setStartDate(new Date(date));
      toggleCalendar();
      return;
    }
    if (startDate) {
      setEndDate(new Date(date));
      toggleCalendar();

      return;
    }
  };

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
      <DatePickerWrapper>
        <DatePicker onClick={toggleCalendar}>
          <Icon src={calendar} alt="calendar" />
          Початок
          <Arrow src={Polygon} alt="polygon" />
        </DatePicker>
        <DatePicker onClick={toggleCalendar}>
          <Icon src={calendar} alt="calendar" />
          Завершення
          <Arrow src={Polygon} alt="polygon" />
        </DatePicker>

        <CalendarWrapper hidden={isHidden}>
          <Calendar value={date} onChange={setDate} onClickDay={setInterval} />
        </CalendarWrapper>
      </DatePickerWrapper>
    </>
  );
};
