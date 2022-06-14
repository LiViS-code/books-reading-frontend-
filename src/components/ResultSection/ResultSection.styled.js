import styled from '@emotion/styled';
import Line from '../../image/svg/line.svg';
import LineLarge from '../../image/svg/line2.svg';
import { theme } from '../../constants/Theme';
const {
  colors: { borderColor, outlineColor, primaryColor, backgroundColor },
  spacing,
} = theme;

export const DateButton = styled.button`
  display: flex;
  align-items: center;
  width: 110px;
  font-size: 14px;
  line-height: 1.21;
  padding: ${spacing(3)};
  border: ${borderColor} 1px solid;
  background-color: ${backgroundColor};
  color: ${primaryColor};
  text-align: start;
  &:hover &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    background-color: #ff6b08;
    border-color: #ff6b08;
    color: white;
  }
  & .icon {
    top: 65%;
    right: 0;
    margin: 0 0 0 7px;

    &:hover,
    &:focus,
    &:active {
      fill: transparent;
    }
  }
`;

export const Text = styled.label`
  margin-bottom: 4px;
  color: #898f9f;
  font-family: Montserrat;
  font-size: 11px;
`;

export const Amount = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  font-family: Montserrat;
  color: #242a37;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.21;
  margin-bottom: 12px;
  @media screen and (min-width: 768) {
    font-size: 14px;
    margin-bottom: 27px;
  }
  @media screen and (min-width: 1280) {
    font-size: 12px;
    align-items: center;
    margin-bottom: 12px;
  }
`;

export const Section = styled.div`
  margin-top: 25px;
  margin-bottom: 24px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 0;
  background-color: #ffffff;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1280px) {
    width: 280px;
  }
`;

export const AddResult = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const Label = styled.label`
  width: 110px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 42px;
  color: #898f9f;

  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 0;
  }
`;

export const Pages = styled.input`
  box-sizing: border-box;
  width: 110px;
  font-size: 14px;
  line-height: 1.21;
  background-color: #f6f7fb;
  outline: transparent;
  border: 1px solid ${outlineColor};
  padding: ${spacing(3)};

  *:focus &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    background-color: #ff6b08;
    border-color: #ff6b08;
    color: white;
  }
`;

export const Button = styled.button`
  width: 240px;
  height: 42px;
  outline: transparent;
  border: none;
  background-color: #ff6b08;
  color: #ffffff;
  font-size: 16px;
  font-family: Montserrat;
  padding: 0;
  margin: 28px 0 24px 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 250ms var(--timing-function);

  :focus :hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    background-color: #ff6b08;
    border-color: #ff6b08;
    color: white;
  }

  @media screen and (min-width: 768px) {
    margin: 30px 17px 12px 0;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 28px;
    margin-left: 0;
  }
`;
export const Statistic = styled.h3`
  display: flex;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 12px;
  color: #242a37;
  line-height: 1.2191;

  align-items: center;
  margin-top: 24px;
  display: flex;
  justify-content: center;

  &::before,
  ::after {
    content: url(${Line});
    margin-top: -5px;
    margin-left: 13px;
    margin-right: 13px;
  }
  @media screen and (min-width: 768) {
    justify-content: start;
    align-items: start;
    font-size: 14px;
    margin: 7px;
    &::before {
      content: none;
    }
    &::after {
      content: url(${LineLarge});
      margin-top: -5px;
      margin-left: 8px;
      margin-right: 0;
    }
  }
  @media screen and (min-width: 1280) {
    font-size: 12px;
    margin-top: 0;
    margin-bottom: 4px;
    margin-left: 0;
    justify-content: center;
    &::before,
    ::after {
      content: url(${Line});
      margin-top: -5px;
      margin-left: 4px;
      margin-right: 4px;
    }
  }
`;
