import { AttributeListDesktop } from './index';
import {
  Book,
  ListRed,
  Author,
  Pages,
  Rating,
  Year,
} from './AttributesRed.styled';

export default function AttributesRed() {
  return (
    <AttributeListDesktop>
      <Book>Назва книги</Book>
      <ListRed>
        <Author>Автор</Author>
        <Year>Рік</Year>
        <Pages>Стор.</Pages>
        <Rating>Рейтинг</Rating>
      </ListRed>
    </AttributeListDesktop>
  );
}
