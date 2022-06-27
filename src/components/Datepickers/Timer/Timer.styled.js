import styled from 'styled-components';

import { theme } from '../../../constants/Theme';
const {
  colors: { numbersColor, activeColor },
  fonts: { numbersFont },
  fontSizing: { numbersFontSize },

  media: { tablet },
  spacing,
} = theme;
export const Days = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
`;
export const Numbers = styled.span`
  font-family: ${numbersFont};
  font-size: ${numbersFontSize};
  color: ${numbersColor};
`;
export const TimerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${activeColor};
  /* width: ${spacing(70)}; */
  box-shadow: ${spacing(1)} ${spacing(1)} ${spacing(2)} rgba(36, 42, 55, 0.15);
  padding: ${spacing(6)} ${spacing(8)};
  margin: ${spacing(2)} 0 ${spacing(6)};
  @media (min-width: ${tablet}) {
    width: ${spacing(70)};
  }
`;
export const Delimeter = styled.span`
  font-family: ${numbersFont};
  font-size: ${numbersFontSize};
  color: ${numbersColor};
`;
