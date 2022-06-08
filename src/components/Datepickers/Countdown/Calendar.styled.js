import styled from 'styled-components';

import { theme } from '../../../constants/Theme';
const {
  colors: { borderColor, outlineColor, secondaryColor },

  media: { tablet, desktop },
  spacing,
} = theme;

export const DatePickerWrapper = styled.div`
  margin-top: ${spacing(5)};
  text-align: center;
  justify-content: center;
  width: 280px;

  @media (min-width: ${tablet}) {
    display: flex;

    justify-content: start;
    margin: ${spacing(5)} 0 ${spacing(6)};
    width: 100%;
  }
`;
export const CalendarWrapper = styled.div`
  display: none;
`;
export const DatePicker = styled.button`
  padding: ${spacing(3)};
  width: 280px;
  margin: ${spacing(3)} 0 ${spacing(3)};
  text-align: start;
  border: ${borderColor} 1px solid;
  background-color: transparent;
  color: ${outlineColor};

  @media (min-width: ${tablet}) {
    width: 250px;
    margin: 0 ${spacing(10)} ${spacing(6)} 0;
  }
`;
export const Icon = styled.img`
  margin: 0;
  margin-right: ${spacing(3)};
  display: inline-block;
  color: ${borderColor};
  fill: ${borderColor};
`;
export const TimerWrapper = styled.div`
  align-items: center;
  @media (min-width: ${tablet}) {
    display: flex;
  }
  @media (min-width: ${desktop}) {
    width: 928px;
  }
`;
export const TimeBlock = styled.div`
  align-items: center;
  color: ${secondaryColor};
  margin-left: auto;
  margin-right: auto;
`;
