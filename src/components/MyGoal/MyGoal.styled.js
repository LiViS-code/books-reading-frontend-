import styled from '@emotion/styled';
import { theme } from '../../constants/Theme';

export const MyGoalContainer = styled.div`
  height: 320px;
  margin: 30px 25px;
  display: block;

  @media (min-width: 768px) {
    width: 680px;
    height: 105px;
    margin: 30px 45px 40px 45px;
    padding: 22px 0 23px 45px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    background-color: ${theme.colors.activeColor};
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);
  }

  @media (min-width: 1280px) {
    width: 288px;
    height: 304px;
    margin: 50px 40px auto auto;
    padding: 0;
    flex-wrap: wrap;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  }
`;

export const GoalTitle = styled.h2`
  height: 60px;
  background-color: #b1b5c2;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  color: ${theme.colors.activeColor};
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.9;
  padding-top: 18px;
  @media (min-width: 768px) {
    width: 270px;
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
  background-color: ${theme.colors.activeColor};
  justify-content: space-around;
  @media (min-width: 768px) {
    padding: 0;
    width: auto;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 12px;
    box-shadow: none;
  }
  @media (min-width: 1280px) {
    margin-bottom: 80px;
  }
`;

export const CounterNumber = styled.p`
  font-family: ${theme.fonts.numbersFont};
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
  width: 100px;
  height: 100px;
  background-color: ${theme.colors.backgroundColorForm};
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
  text-align: center;
  @media (min-width: 768px) {
    height: 60px;
  }
  @media (min-width: 1280px) {
    height: 100px;
    margin-bottom: 15px;
  }
`;
export const CounterLabelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 14px;
  @media (min-width: 768px) {
    margin-top: -12px;
    justify-content: space-evenly;
  }
  @media (min-width: 1280px) {
    margin: 0;
  }
`;

export const CounterLabel = styled.p`
  width: 66px;
  font-weight: 500;
  font-size: 14px;
  line-height: 0.82;
  text-align: center;
  color: #898f9f;
  @media (min-width: 768px) {
    width: 100px;
    font-size: 11px;
  }
  @media (min-width: 1280px) {
    width: 66px;
    font-size: 14px;
    line-height: 0.9;
  }
`;
