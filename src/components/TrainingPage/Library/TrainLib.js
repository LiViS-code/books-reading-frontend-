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
  BookIcon,
} from './TrainLib.styled';
import iconlibrary from '../../../image/svg/iconlibrary.svg';

export const TrainLib = ({ books = [], handleUpdateBook }) => {
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
              <BookIcon src={iconlibrary} />
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
              {/* <IconButton
                type="button"
                className={'iconDelete'}
                IconComponent={DeleteIcon}
                onClick={() => handleUpdateBook(id)}
              /> */}
            </ItemBooks>
          ))
        ) : (
          <EmptyItem>
            {/* <BookIcon style={{ fill: '#A6ABB9' }} className={'someClass'} /> */}
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
