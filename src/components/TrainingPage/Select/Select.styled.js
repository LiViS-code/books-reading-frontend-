import styled from 'styled-components';
import { theme } from '../../../constants/Theme';
const {
  colors: { outlineColor },
  media: { tablet, desktop },
  // spacing,
} = theme;

export const DropDownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 25px;
  margin-bottom: 0;

  @media screen and (min-width: ${tablet}) {
    margin-top: 28px;
    margin-bottom: 32px;
    width: 483px;
  }
  @media screen and (min-width: ${desktop}) {
    justify-content: start;
    width: 715px;
    margin-top: 0;
    margin-right: 32px;
  }
`;
export const DropDownHeader = styled.div`
  margin-bottom: 0.8em;
  padding: 12px 0 12px 12px;
  box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
  font-weight: 500;
  font-size: 14px;
  background: #ffffff;
  color: ${outlineColor};

  @media screen and (min-width: ${tablet}) {
    width: 483px;
  }
  @media screen and (min-width: ${desktop}) {
    width: 715px;
  }
`;
export const DropDownListContainer = styled.div`
  @media screen and (min-width: ${tablet}) {
    width: 483px;
  }
  @media screen and (min-width: ${desktop}) {
    width: 715px;
  }
  box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
`;
export const DropDownList = styled.ul`
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
      width: 715px;
    }
  }
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 280px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e5eb;
  justify-content: space-around;
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
    width: 715px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
`;
