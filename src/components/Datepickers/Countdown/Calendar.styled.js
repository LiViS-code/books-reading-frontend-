import styled from 'styled-components';

import { theme } from '../../../constants/Theme';
const {
  colors: {
    borderColor,
    outlineColor,
    secondaryColor,
    headingBackground,
    activeColor,
  },

  media: { tablet, desktop },
  spacing,
} = theme;

export const DatePickerWrapper = styled.div`
  margin-top: ${spacing(5)};
  text-align: center;
  justify-content: center;

  @media (min-width: ${tablet}) {
    display: flex;
    justify-content: flex-start;
    margin: ${spacing(5)} 0 ${spacing(6)};
    width: 100%;
  }
  @media (min-width: ${desktop}) {
    justify-content: center;
  }
`;
export const Heading = styled.h2`
  color: ${activeColor};
  background-color: ${headingBackground};
  padding: ${spacing(4.3)} 0;
  width: 100%;
  text-align: center;
  font-size: ${spacing(5)};
  font-weight: 600;
  line-height: ${spacing(6)};
`;
export const CalendarWrapper = styled.div`
  ${props => props.isHidden && `display: none;`};
  position: absolute;
  left: 0;
  width: 100%;
`;
export const DateButton = styled.button`
  display: flex;
  padding: ${spacing(3)};
  width: 100%;
  margin: ${spacing(3)} 0 ${spacing(3)};
  text-align: start;
  border: ${borderColor} 1px solid;
  background-color: transparent;
  color: ${outlineColor};

  @media (min-width: ${tablet}) {
    width: ${spacing(62.5)};
    margin: 0 ${spacing(10)} ${spacing(6)} 0;
  }
`;
export const Icon = styled.img`
  margin: 0;
  margin-right: ${spacing(3)};
  display: inline-block;
`;
export const Arrow = styled.img`
  margin-left: auto;
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
