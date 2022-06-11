import React from 'react';
import BookData from './BookData';
import { Container, Icon } from './index';
import sprite from './symbol-defs.svg';
import { ButtonResume } from './index';

export default function BookCard({ book }) {
  const { status } = book;
  return (
    <Container>
      {status === 'Reading now' ? (
        <Icon width={22} height={17}>
          <use href={`${sprite}#yellow_book`} />
        </Icon>
      ) : (
        <Icon width={22} height={17}>
          <use href={`${sprite}#grey_book`} />
        </Icon>
      )}

      <BookData data={book}></BookData>

      {status === 'Already read' && (
        <ButtonResume type="button">Резюме</ButtonResume>
      )}
    </Container>
  );
}
