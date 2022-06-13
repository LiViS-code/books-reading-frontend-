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
  margin: ${spacing(12.5)} ${spacing(6.25)};
  display: flex;
  flex-direction: column;
  @media (min-width: ${desktop}) {
    margin: ${spacing(7.5)} ${spacing(6.25)};
    width: ${spacing(232)};
  }
`;

export const TrainingButton = styled.button`
  width: 171px;
  height: 42px;
  background-color: ${accentColor};
  color: ${activeColor};
  border: none;
  margin: ${spacing(8)}${spacing(8)};
  cursor: pointer;
  @media (min-width: ${tablet}) {
    width: ${spacing(50)};
    height: ${spacing(15)};
  } ;
`;
export const TrainingBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 928px;
  @media (min-width: ${desktop}) {
  } ;
`;
export const Sidebar = styled.div`
  display: flex;
`;
