import styled from 'styled-components';
import { theme } from '../../../constants/Theme';
const {
  colors: { secondaryColor, accentColor, borderColor, outlineColor },
  media: { tablet, desktop },
} = theme;

export const Wrapper = styled.div`
  width: 100%;
`;

export const HeaderList = styled.div`
  display: none;
  @media screen and (min-width: ${tablet}) {
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    border-top: 1px solid #f6f7fb;
  }
`;
export const HeaderListItem = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: ${secondaryColor};
  margin-left: auto;
  margin-right: auto;
`;

export const ListBooks = styled.ul`
  & .trainingList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 280px;
    margin: 0 auto;
    border-top: 1px solid #f6f7fb;
    @media screen and (min-width: ${tablet}) {
      width: 704px;
    }
    @media screen and (min-width: ${desktop}) {
      width: 100%;
    }
  }
`;

export const ItemBooks = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 280px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e5eb;
  & .icon {
    position: absolute;
    left: 0;
  }
  & .iconDelete {
    position: absolute;
    right: 0;
    margin-top: 0;
    fill: ${outlineColor};

    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
    }
    &:hover svg,
    &:focus svg,
    &:active svg {
      fill: ${accentColor};
    }
  }
  @media screen and (min-width: ${tablet}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 704px;
    padding-top: 12px;
    padding-bottom: 12px;
    justify-content: space-around;
  }
  @media screen and (min-width: ${desktop}) {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const BookItem = styled.li`
  & .listItem {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 280px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e0e5eb;
    position: absolute;
    left: 0;
  }
  & .iconDelete {
    position: absolute;
    right: 0;
    margin-top: 0;
    fill: ${borderColor};

    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
    }
    &:hover svg,
    &:focus svg,
    &:active svg {
      fill: ${accentColor};
    }
  }
  @media screen and (min-width: ${tablet}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 704px;
    padding-top: 12px;
    padding-bottom: 12px;
    justify-content: space-around;
  }
  @media screen and (min-width: ${desktop}) {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const Item = styled.p`
  display: flex;
  max-width: 200px;
  margin-left: 34px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  &:not(:last-child) {
    margin-bottom: 14px;
  }
  & .titleBook {
    display: none;
  }
  @media screen and (min-width: ${tablet}) {
    flex-direction: column;
    font-size: 14px;
    line-height: 1.21;
    margin-left: 0;
    &:not(:last-child) {
      margin-bottom: 0;
    }
    &:first-of-type {
      margin-left: 34px;
    }
    & .titleBook {
      display: block;
    }
  }
`;

export const TitleItem = styled.span`
  min-width: 41px;
  margin-right: 28px;
  color: ${secondaryColor};
  @media screen and (min-width: ${tablet}) {
    margin-right: 0;
    &.isHiddenItem {
      display: none;
    }
  }
`;

export const TextItem = styled.span`
  @media screen and (min-width: ${tablet}) {
    &.isHiddenItem {
      display: none;
    }
  }
`;

// Mobile version
export const EmptyItem = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 280px;
  padding-top: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e0e5eb;
  & .icon {
    position: absolute;
    left: 0;
  }
  @media screen and (min-width: ${tablet}) {
    display: flex;
    flex-direction: row;
    width: 704px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  @media screen and (min-width: ${desktop}) {
    width: 100%;
    padding-top: 23px;
    padding-bottom: 23px;
  }
`;

export const EmptyTextItem = styled.p`
  display: flex;
  max-width: 200px;
  margin-left: 40px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  @media screen and (min-width: ${tablet}) {
    &.isHiddenItem {
      display: none;
    }
  }
`;

export const Placeholder = styled.span`
  max-width: 154px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  color: transparent;
  @media screen and (min-width: ${tablet}) {
    font-size: 14px;
    line-height: 1.21;
  }
`;
export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  padding: 7px;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: transparent;
  border: transparent;
  cursor: pointer;

  & svg {
    fill: ${borderColor};
    /* width: 30px;
    height: 30px; */
  }
`;
