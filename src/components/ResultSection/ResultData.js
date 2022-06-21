import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { getTraining } from '../../redux/books/books-selectors';
import { Result, Day, Hour, Page, PageWord } from './ResultData.styled';

export default function ResultData() {
  const training = useSelector(getTraining);
  let currentTraining = null;
  if (training.length !== 0) {
    let latestStart = training[0].start;
    training.map(({ start }) => {
      if (latestStart < start) {
        latestStart = start;
      }
    });
    currentTraining = training.find(({ start }) => start === latestStart);
  }

  return (
    <>
      {currentTraining.result.map(({ date, page }) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = d.getMonth();
        const day = d.getDate();
        const hour = d.getUTCHours();
        const minute = d.getUTCMinutes();
        const sec = d.getSeconds();

        return (
          <Result key={nanoid()}>
            <Day>
              {day}.{month}.{year}
            </Day>
            <Hour>
              {hour}:{minute}:{sec}
            </Hour>
            <Page>
              <div>{page}</div>
              <PageWord>стор.</PageWord>
            </Page>
          </Result>
        );
      })}
    </>
  );
}
