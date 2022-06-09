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
  width: ${spacing(70)};

  @media (min-width: ${tablet}) {
    display: flex;

    justify-content: start;
    margin: ${spacing(5)} 0 ${spacing(6)};
    width: 100%;
  }
`;
export const CalendarWrapper = styled.div`
  ${props => props.isHidden && `display: none;`};
  /* display: block; */
  position: absolute;
  left: 0;
  width: 100%;
`;
export const DatePicker = styled.button`
  position: relative;
  padding: ${spacing(3)};
  width: ${spacing(70)};

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
`;
export const Arrow = styled.img`
  justify-self: flex-end;
  padding-right: ${spacing(4.5)};
  display: inline-block;
`;

export const TimerWrapper = styled.div`
  align-items: center;
  margin: ${spacing(5)} 0;
  @media (min-width: ${tablet}) {
    display: flex;
  }
  @media (min-width: ${desktop}) {
    width: 928px;
  }
`;
export const TimeBlock = styled.div`
  text-align: center;
  color: ${secondaryColor};
  margin-left: auto;
  margin-right: auto;
`;
