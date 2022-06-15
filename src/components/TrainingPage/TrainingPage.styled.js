import styled from 'styled-components';
import { theme } from '../../constants/Theme';
const {
  colors: { activeColor, accentColor },
  media: { tablet, desktop },
  spacing,
} = theme;

export const TimingContainer = styled.div`
  margin: ${spacing(12.5)} 0 ${spacing(6.25)} 0;
  display: flex;
  flex-direction: column;

  @media (min-width: ${desktop}) {
    margin: 0 0;
  }
`;

export const TrainingButton = styled.button`
  width: 171px;
  height: 42px;
  background-color: ${accentColor};
  color: ${activeColor};
  border: none;
  margin: ${spacing(8)} auto ${spacing(8)} auto;
  cursor: pointer;
  @media (min-width: ${tablet}) {
    width: ${spacing(50)};
    height: ${spacing(15)};
  } ;
`;
export const TrainingBox = styled.div`
  display: flex;
  flex-direction: column;
  width: ${spacing(232)};
  @media (min-width: ${desktop}) {
    margin-top: ${spacing(10)};
    flex-direction: row;
  } ;
`;
export const Sidebar = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  width: ${58};
  margin-left: ${spacing(8)};
`;
export const Box = styled.div`
  /* display: flex; */
`;
