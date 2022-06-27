import styled from 'styled-components';
import { theme } from '../../constants/Theme';
const {
  colors: { activeColor, accentColor, disabledColor },
  media: { tablet, desktop },
  fonts: { mainFont },
  fontSizing: { mainFontSize },
  spacing,
} = theme;

export const TimingContainer = styled.div`
  margin: ${spacing(12.5)} 0 ${spacing(6.25)} 0;
  display: flex;
  flex-direction: column;
  @media (max-width: ${tablet}) {
    width: 280px;
    padding: 0 20px 20px 20px;
  }
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

  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${mainFontSize};
  line-height: 17px;
  color: ${activeColor};
  text-align: center;
  cursor: pointer;

  @media (min-width: ${tablet}) {
    width: ${spacing(50)};
    height: ${spacing(10)};
  }
  &:hover,
  &:focus {
    color: ${activeColor};
    background: ${disabledColor};
    border: transparent;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 250ms ease;
  }
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

export const NewTrainingPage = styled.div`
  width: 152px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
`;
