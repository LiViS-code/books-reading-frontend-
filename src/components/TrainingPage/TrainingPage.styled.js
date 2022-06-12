import styled from 'styled-components';
import { theme } from '../../constants/Theme';
const {
  colors: { activeColor, headingBackground, accentColor },
  media: { tablet, desktop },
  spacing,
} = theme;

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
export const TimingContainer = styled.div`
  @media (min-width: ${desktop}) {
    width: ${spacing(232)};
  }
`;

export const TrainingButton = styled.button`
  width: 171px;
  height: 42px;
  background-color: ${accentColor};
  color: ${activeColor};
  border: none;
  cursor: pointer;
  @media (min-width: ${tablet}) {
    width: ${spacing(50)};
    height: ${spacing(15)};
  } ;
`;
