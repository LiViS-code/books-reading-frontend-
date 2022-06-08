import endOfYear from 'date-fns/endOfYear';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Calendar from 'react-calendar';
import { Timer } from '../Timer/Timer';
import {
  CalendarWrapper,
  DatePickerWrapper,
  DatePicker,
  Icon,
  TimerWrapper,
  TimeBlock,
} from './Calendar.styled';
import calendar from '../../../image/svg/calendar.svg';
import Polygon from '../../../image/svg/Polygon.svg';

export const Countdown = () => {
  const yearEnd = endOfYear(new Date());
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  console.log(date);
  const currentDate = new Date().getTime();

  const setInterval = () => {
    setDate(date);
    if (!startDate) {
      setStartDate(date);
      console.log(startDate);
      return;
    }
    if (startDate) {
      setEndDate(date);
      return;
    }
  };
  toast(t => (
    <span>
      Custom and <b>bold</b>
      <button onClick={setInterval}>Dismiss</button>
    </span>
  ));
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
        <DatePicker>
          <Icon src={calendar} alt="calendar" />
          Початок
          <Icon src={Polygon} alt="polygon" />
        </DatePicker>
        <DatePicker>
          <Icon src={calendar} alt="calendar" />
          Завершення
          <Icon src={Polygon} alt="polygon" />
        </DatePicker>
        <CalendarWrapper>
          <Calendar value={date} onChange={setDate} onClickDay={toast} />
        </CalendarWrapper>

        <ToastContainer />
      </DatePickerWrapper>
    </>
  );
};
