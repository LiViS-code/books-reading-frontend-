import {
  Wrapper,
  ListBooks,
  HeaderList,
  HeaderListItem,
  ItemBooks,
  Item,
  TitleItem,
  TextItem,
  EmptyItem,
  EmptyTextItem,
  Placeholder,
} from './TrainLib.styled';
import { ReactComponent as BookIcon } from '../../../image/svg/iconlibrary.svg';
import { ReactComponent as DeleteIcon } from '../../../image/svg/delete.svg';
export const TrainLib = ({ books = [] }) => {
  return (
    <Wrapper>
      <HeaderList>
        <HeaderListItem>Назва книги</HeaderListItem>
        <HeaderListItem>Автор</HeaderListItem>
        <HeaderListItem>Рік</HeaderListItem>
        <HeaderListItem>Стор.</HeaderListItem>
      </HeaderList>

      <ListBooks>
        {books.length ? (
          books.map(({ id, name, author, year, pages }) => (
            <ItemBooks key={id}>
              <BookIcon style={{ fill: '#A6ABB9' }} className={'icon'} />
              <Item style={{ width: '180px' }}>
                <TextItem className="isHiddenItem">{name}</TextItem>
              </Item>

              <Item style={{ width: '170px' }}>
                <TitleItem className="isHiddenItem">Автор:</TitleItem>
                <TextItem> {author}</TextItem>
              </Item>

              <Item style={{ width: '125px' }}>
                <TitleItem className="isHiddenItem">Рік:</TitleItem>
                <TextItem> {year}</TextItem>
              </Item>

              <Item style={{ width: '24px', marginRight: '55px' }}>
                <TitleItem className="isHiddenItem">Стор.:</TitleItem>
                <TextItem> {pages}</TextItem>
              </Item>
              <button>
                <img src={DeleteIcon} alt="delete"></img>
              </button>
            </ItemBooks>
          ))
        ) : (
          <EmptyItem>
            <BookIcon style={{ fill: '#A6ABB9' }} className={'icon'} />
            <EmptyTextItem>
              <Placeholder>...</Placeholder>
            </EmptyTextItem>

            <EmptyTextItem className="isHiddenItem">
              <TitleItem>Автор:</TitleItem>
              <Placeholder>...</Placeholder>
            </EmptyTextItem>

            <EmptyTextItem className="isHiddenItem">
              <TitleItem>Рік: </TitleItem>
              <Placeholder>...</Placeholder>
            </EmptyTextItem>

            <EmptyTextItem className="isHiddenItem">
              <TitleItem>Стор: </TitleItem>
              <Placeholder>...</Placeholder>
            </EmptyTextItem>
          </EmptyItem>
        )}
      </ListBooks>
    </Wrapper>
  );
};
