import React from 'react';
import Attributes from './Attributes';
import {
  Title,
  Library,
  ButtonTraining,
  ButtonName,
  ButtonAdd,
  BookCard,
} from './index';
import data from './data.json';
import sprite from './symbol-defs.svg';

export default function LibraryView() {
  const alreadyRed = data.filter(book => book.status === 'Already read');
  const readingNow = data.filter(book => book.status === 'Reading now');
  const goingToRead = data.filter(book => book.status === 'Going to read');

  return (
    <Library>
      <div id="already_red">
        <Title>Прочитано</Title>
        <Attributes status={'already_red'} />
        {alreadyRed.map(el => (
          <BookCard book={el} key={el.name} />
        ))}
      </div>

      <div id="reading_now">
        <Title>Читаю</Title>
        <Attributes />
        {readingNow.map(el => (
          <BookCard book={el} key={el.name} />
        ))}
      </div>

      <div id="going_to_read">
        <Title>Маю намір прочитати</Title>
        <Attributes />
        {goingToRead.map(el => (
          <BookCard book={el} key={el.name} />
        ))}
      </div>

      <ButtonTraining type="button">
        <ButtonName>Моє тренування</ButtonName>
      </ButtonTraining>

      <ButtonAdd type="button">
        <svg width={16} height={16}>
          <use href={`${sprite}#plus`} />
        </svg>
      </ButtonAdd>
    </Library>
  );
}

LibraryView();
