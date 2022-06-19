import endOfYear from 'date-fns/endOfYear';
import { useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import { Timer } from '../Timer/Timer';
import { TimerWrapper, TimeBlock } from './Calendar.styled';
import { getTraining } from '../../../redux/books/books-selectors';

export const CountdownTraining = () => {
  const training = useSelector(getTraining);
  const currentTraining = training.find(
    ({ end }) => new Date(end) > new Date()
  );
  const yearEnd = endOfYear(new Date());

  const { start, end } = currentTraining;
  const startDate = new Date(start);
  const endDate = new Date(end);

  const currentDate = new Date().getTime();

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
