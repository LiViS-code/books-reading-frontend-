import { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  DatePickerWrapper,
  DateButton,
  Icon,
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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [valueStart, setValueStart] = useState('Початок');
  const [valueEnd, setValueEnd] = useState('Завершення');
  // const yearEnd = endOfYear(new Date());
  //   const training = useSelector(getTraining);
  const dispatch = useDispatch();

  const CustomInput = ({ value, onClick }) => (
    <DateButton onClick={onClick}>
      <Icon src={calendar} alt="calendar" />
      {value}
      <Arrow src={Polygon} alt="polygon" />
    </DateButton>
  );

  return (
    <>
      <>
        <Heading>Моє тренування</Heading>
        <DatePickerWrapper>
          <div style={{ maxWidth: '280px' }}>
            <DatePicker
              selected={startDate}
              onChange={date => {
                setStartDate(date);
                setValueStart(date);
                dispatch(startTraining(date));
              }}
              includeDates={[new Date()]}
              customInput={<CustomInput />}
              value={valueStart}
              width="250px"
            />
          </div>
          <div style={{ maxWidth: '280px' }}>
            <DatePicker
              selected={endDate}
              onChange={date => {
                setEndDate(date);
                setValueEnd(date);
                dispatch(endTraining(date));
              }}
              minDate={new Date()}
              customInput={<CustomInput />}
              value={valueEnd}
            />
          </div>
        </DatePickerWrapper>
      </>
    </>
  );
};
