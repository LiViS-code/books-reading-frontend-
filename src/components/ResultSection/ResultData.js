import { useSelector } from 'react-redux';
import { getTraining } from '../../redux/books/books-selectors';
import { Result, Day, Hour, Page, PageWord } from './ResultData.styled';
import { nanoid } from 'nanoid';
export default function ResultData() {
  const training = useSelector(getTraining);

  return (
    <>
      {training.result.map(({ date, page }) => {
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
              {page}
              <PageWord>стор.</PageWord>
            </Page>
          </Result>
        );
      })}
    </>
  );
}
