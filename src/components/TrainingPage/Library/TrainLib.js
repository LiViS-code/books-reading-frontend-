import Attributes from '../../../views/LibraryView/Attributes';
import { Library, BookCard } from '../../../views/LibraryView';
import data from '../../../views/LibraryView/data.json';

// import { StyledList } from './TrainLib.styled';

export const TrainLib = () => {
  const readingNow = data.filter(book => book.status === 'Reading now');
  return (
    <>
      {/* <StyledList>
        <Attributes />
        {readingNow.map(el => (
          <BookCard book={el} key={el.name} />
        ))}
      </StyledList> */}
      <Library>
        <Attributes />
        {readingNow.map(el => (
          <BookCard book={el} key={el.name} />
        ))}
      </Library>
    </>
  );
};
