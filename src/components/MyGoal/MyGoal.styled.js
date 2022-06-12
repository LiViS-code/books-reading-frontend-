import styled from '@emotion/styled';
import { theme } from '../../constants/Theme';
const {
  colors: { activeColor, backgroundColorForm, headingBackground },
  fonts: { numbersFont },
  spacing,
} = theme;

export const MyGoalContainer = styled.div`
  height: ${spacing(80)};
  margin: ${spacing(7.5)} ${spacing(6.25)};
  display: block;

  @media (min-width: 768px) {
    width: ${spacing(170)};
    height: ${spacing(26.25)};
    margin: 30px 45px 40px 45px;
    padding: 22px 0px 23px 45px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    background-color: ${activeColor};
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);
  }

  @media (min-width: 1280px) {
    width: ${spacing(72)};
    height: ${spacing(76)};
    margin: 50px 40px auto auto;
    padding: 0;
    flex-wrap: wrap;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  }
`;

export const GoalTitle = styled.h2`
  height: ${spacing(15)};
  background-color: ${headingBackground};
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  color: ${activeColor};
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.9;
  padding-top: ${spacing(4.5)};
  @media (min-width: 768px) {
    width: ${spacing(67.5)};
  }
  @media (min-width: 1280px) {
    margin-bottom: auto;
    width: 100%;
  }
`;
export const CounterWrapper = styled.div`
  height: 100px;
  padding: 55px 25px;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  background-color: ${activeColor};
  justify-content: space-around;
  @media (min-width: 768px) {
    padding: 0;
    width: auto;
    align-items: center;
    justify-content: space-evenly;
    padding-top: ${spacing(3)};
    box-shadow: none;
  }
  @media (min-width: 1280px) {
    margin-bottom: ${spacing(20)};
  }
`;

export const CounterNumber = styled.p`
  font-family: ${numbersFont};
  font-weight: bold;
  font-size: 45px;
  line-height: 1.18;
  padding: 25%;
  @media (min-width: 768px) {
    padding: 0;
    height: 100%;
  }
  @media (min-width: 1280px) {
    padding: 25%;
  }
`;

export const Counter = styled.div`
  width: ${spacing(25)};
  height: ${spacing(25)};
  background-color: ${backgroundColorForm};
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
  text-align: center;
  @media (min-width: 768px) {
    height: ${spacing(15)};
  }
  @media (min-width: 1280px) {
    height: ${spacing(25)};
    margin-bottom: ${spacing(3.75)};
  }
`;
export const CounterLabelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: ${spacing(3.5)};
  @media (min-width: 768px) {
    margin-top: -12px;
    justify-content: space-evenly;
  }
  @media (min-width: 1280px) {
    margin: 0;
  }
`;

export const CounterLabel = styled.p`
  width: ${spacing(16.5)};
  font-weight: 500;
  font-size: 14px;
  line-height: 0.82;
  text-align: center;
  color: #898f9f;
  @media (min-width: 768px) {
    width: ${spacing(25)};
    font-size: 11px;
  }
  @media (min-width: 1280px) {
    width: 66px;
    font-size: 14px;
    line-height: 0.9;
  }
`;
