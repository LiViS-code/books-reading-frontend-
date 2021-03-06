// import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  IconButton,
  DeleteIcon,
} from './TrainLib.styled';
import { ReactComponent as BookIcon } from '../../../image/svg/iconlibrary.svg';
import deleteIcon from '../../../image/svg/deleteIcon.svg';
import { getTrainingBooks } from '../../../redux/books/books-selectors';
import {
  setTrainingBooks,
  deleteBookFromTraining,
} from '../../../redux/books/books-operations';

export const TrainLib = () => {
  const bookList = useSelector(getTrainingBooks);
  const dispatch = useDispatch();

  const deleteBook = id => {
    if (bookList) {
      const newBooks = bookList.filter(b => b._id !== id);
      dispatch(setTrainingBooks(newBooks));
      dispatch(deleteBookFromTraining(id));
    }
  };

  return (
    <Wrapper>
      <HeaderList>
        <HeaderListItem>Назва книги</HeaderListItem>
        <HeaderListItem>Автор</HeaderListItem>
        <HeaderListItem>Рік</HeaderListItem>
        <HeaderListItem>Стор.</HeaderListItem>
      </HeaderList>

      <ListBooks>
        {bookList ? (
          bookList.map(({ _id, title, author, year, pages }) => (
            <ItemBooks key={_id}>
              <BookIcon style={{ fill: '#A6ABB9' }} className={'icon'} />
              <Item style={{ width: '180px' }}>
                <TextItem>{title}</TextItem>
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

              <IconButton type="button" onClick={() => deleteBook(_id)}>
                <DeleteIcon
                  src={deleteIcon}
                  alt="delete"
                  style={{ fill: '#A6ABB9' }}
                  className={'iconDelete'}
                />
              </IconButton>
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
