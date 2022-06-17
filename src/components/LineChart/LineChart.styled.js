import styled from 'styled-components';
import { theme } from '../../constants/Theme';

const {
  media: { tablet, desktop },
  // spacing,
} = theme;

export const ChartContainer = styled.div`
  width: 280px;
  height: auto;

  background-color: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);
  margin-bottom: 49px;
  padding-top: 25px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: ${tablet}) {
    width: 704px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 928px;
  } ;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${tablet}) {
    justify-content: flex-start;
  }

  @media screen and (min-width: ${desktop}) {
    justify-content: flex-start;
  } ;
`;

export const TitleChart = styled.p`
  font-size: 15px;
  text-transform: uppercase;
  margin-left: 23px;

  @media screen and (min-width: ${tablet}) {
    margin-left: 49px;
  }
`;

export const DayNumber = styled.div`
  width: 25px;
  height: 25px;
  margin-left: 9px;
  background-color: #f5f7fa;
  text-align: center;
`;
