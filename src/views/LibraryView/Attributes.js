import {
  AttributeListDesktop,
  AttributeAuthor,
  AttributeYear,
  AttributePages,
  List,
  AttributeBook,
} from './index';
import {
  BookRed,
  ListRed,
  Author,
  Pages,
  Rating,
  Year,
} from './Attributes.styled';

export default function Attributes({ status }) {
  return (
    <AttributeListDesktop>
      {status === 'already_red' ? (
        <>
          <BookRed>Назва книги</BookRed>
          <ListRed>
            <Author>Автор</Author>
            <Year>Рік</Year>
            <Pages>Стор.</Pages>
            <Rating>Рейтинг</Rating>
          </ListRed>
        </>
      ) : (
        <>
          <AttributeBook>Назва книги</AttributeBook>
          <List>
            <AttributeAuthor>Автор</AttributeAuthor>
            <AttributeYear>Рік</AttributeYear>
            <AttributePages>Стор.</AttributePages>
          </List>
        </>
      )}
    </AttributeListDesktop>
  );
}
