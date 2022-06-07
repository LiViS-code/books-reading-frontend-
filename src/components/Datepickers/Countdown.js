import endOfYear from 'date-fns/endOfYear';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Calendar from 'react-calendar';
import { Timer } from './Timer/Timer';

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
  // toast(t => (
  //   <span>
  //     Custom and <b>bold</b>
  //     <button onClick={setInterval => toast.dismiss(t.id)}>Dismiss</button>
  //   </span>
  // ));
  return (
    <>
      <>
        {/* <Calendar value={date} onChange={setDate} onClickDay={toast} /> */}
        {/* <ToastContainer /> */}
      </>
      <Timer deadline={yearEnd} startdate={currentDate} />
      <Timer deadline={endDate} startdate={startDate} />
    </>
  );
};
