import endOfYear from 'date-fns/endOfYear';
import { useState } from 'react';
import { Timer } from './Timer/Timer';
import { DatePicker } from './Calendar/Calendar';
import Calendar from 'react-calendar';

export const Countdown = () => {
  const yearEnd = endOfYear(new Date());
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  console.log(date);
  return (
    <>
      <Calendar onChange={onChange} value={date} />
      <Timer deadline={yearEnd} />
      <Timer deadline={date} />
    </>
  );
};
