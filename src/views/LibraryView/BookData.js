import {
  Book,
  ListsContainer,
  AttributeList,
  ValueList,
  BookName,
  Attribute,
  Author,
  Year,
  Pages,
  Stars,
} from './index';
import sprite from './symbol-defs.svg';
import { BookNameRed, AuthorRed, YearRed } from './BookCard.styled';

export default function BookData({ data }) {
  const { name, author, year, pages, rating, status } = data;
  return (
    <Book>
      {status === 'Already read' ? (
        <BookNameRed>{name}</BookNameRed>
      ) : (
        <BookName>{name}</BookName>
      )}
      <ListsContainer>
        <AttributeList>
          <Attribute>Автор:</Attribute>
          <Attribute>Рік:</Attribute>
          <Attribute>Стор.:</Attribute>
          {status === 'Already read' && <Attribute>Рейтинг:</Attribute>}
        </AttributeList>
           
        <ValueList>
          {status === 'Already read' ? (
            <AuthorRed>{author}</AuthorRed>
          ) : (
            <Author>{author}</Author>
          )}

          {status === 'Already read' ? (
            <YearRed>{year}</YearRed>
          ) : (
            <Year>{year}</Year>
          )}

          <Pages>{pages}</Pages>

          {status === 'Already read' && (
            <Stars>
              {rating >= 1 ? (
                <svg width={17} height={17}>
                  <use href={`${sprite}#yellow_star`}></use>
                </svg>
              ) : (
                <svg width={17} height={17}>
                  <use href={`${sprite}#white_star`}></use>
                </svg>
              )}
              {rating >= 2 ? (
                <svg width={17} height={17}>
                  <use href={`${sprite}#yellow_star`}></use>
                </svg>
              ) : (
                <svg width={17} height={17}>
                  <use href={`${sprite}#white_star`}></use>
                </svg>
              )}
              {rating >= 3 ? (
                <svg width={17} height={17}>
                  <use href={`${sprite}#yellow_star`}></use>
                </svg>
              ) : (
                <svg width={17} height={17}>
                  <use href={`${sprite}#white_star`}></use>
                </svg>
              )}
              {rating >= 4 ? (
                <svg width={17} height={17}>
                  <use href={`${sprite}#yellow_star`}></use>
                </svg>
              ) : (
                <svg width={17} height={17}>
                  <use href={`${sprite}#white_star`}></use>
                </svg>
              )}
              {rating >= 5 ? (
                <svg width={17} height={17}>
                  <use href={`${sprite}#yellow_star`}></use>
                </svg>
              ) : (
                <svg width={17} height={17}>
                  <use href={`${sprite}#white_star`}></use>
                </svg>
              )}
            </Stars>
          )}
        </ValueList>
      </ListsContainer>
    </Book>
  );
}
