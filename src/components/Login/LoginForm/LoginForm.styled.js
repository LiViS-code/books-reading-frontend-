import styled from '@emotion/styled';
import img from '../../../image/picture-min.jpg';
import { theme } from '../../../constants/Theme';

const {
  accentColor,
  borderColor,
  activeColor,
  primaryColor,
  backgroundColorForm,
  secondaryColor,
  disabledColor,
} = theme.colors;
const { mainFont } = theme.fonts;
const { spacing } = theme;
const {
  // mobile,
  tablet,
  desktop,
} = theme.media;

export const SectionContainer = styled.div`
  @media screen and (min-width: ${desktop}) {
    display: flex;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const BackgroundContainer = styled.div`
  background: linear-gradient(0deg, rgba(9, 30, 63, 0.8), rgba(9, 30, 63, 0.8)),
    url(${img});
  width: 100%;
  background-size: 100%;
  @media screen and (min-width: ${tablet}) {
    height: ${spacing(140)};
    padding-top: ${spacing(16)};
    margin-top: 0;
    width: 100%;
  }
  @media screen and (min-width: ${desktop}) {
    max-width: 550px;
  }
`;

export const FormContainer = styled.div`
  padding-left: ${spacing(5)};
  padding-right: ${spacing(5)};
  padding-top: ${spacing(8)};
  padding-bottom: ${spacing(8)};
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: ${tablet}) {
    background-color: ${activeColor};
    box-sizing: border-box;
    width: ${spacing(100)};
    height: ${spacing(107.5)};
    margin-right: auto;
    margin-left: auto;
    padding: ${spacing(10)};
  }

  @media screen and (max-width: ${spacing(320)}) {
  }
`;
export const GoogleButton = styled.a`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  text-decoration: none;
  margin-bottom: ${spacing(7)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${spacing(37.5)};
  height: ${spacing(10)};
  background-color: ${backgroundColorForm};
  border: none;
  font-family: 'Roboto';
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: ${spacing(4)};
  line-height: ${spacing(9.5)};
  color: #707375;
  @media screen and (min-width: ${tablet}) {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
export const GoogleImage = styled.img`
  position: absolute;
  left: 14px;
  width: 18px;
  height: 18px;
  z-index: 2;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const StarContainer = styled.div`
  color: ${accentColor};
  position: absolute;
  top: ${spacing(-0.5)};
  left: ${spacing(36.5)};
`;

export const StarContainer2 = styled.div`
  color: ${accentColor};
  position: absolute;
  top: ${spacing(-0.5)};
  left: ${spacing(14.5)};
`;

export const InputWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: ${spacing(320)}) {
  }
`;

export const Input = styled.input`
  display: flex;
  max-width: 400px;
  background-color: ${backgroundColorForm};
  color: ${primaryColor};
  font: ${mainFont};
  box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
  flex-direction: column;
  box-sizing: border-box;
  height: ${spacing(10.5)};
  border: 0px solid #a6abb9;
  padding: ${spacing(3)};
  margin-top: ${spacing(2)};
  margin-bottom: ${spacing(5)};
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  @media screen and (min-width: ${tablet}) {
    width: 100%;
  }

  ::placeholder {
    color: ${borderColor};
  }

  &:focus {
    background-color: #ffffff;
    border: none;
    outline: none;
  }
`;

export const Label = styled.label`
  color: ${activeColor};
  font: ${mainFont};
  @media screen and (min-width: 768px) {
    color: ${secondaryColor};
  }
`;

export const InputContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const NumberDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const LoginButton = styled.button`
  font: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: ${spacing(4)};
  line-height: 17px;
  color: ${activeColor};
  background-color: ${accentColor};
  border: 0px solid #242a37;
  width: ${spacing(70)};
  height: ${spacing(15)};
  margin-bottom: ${spacing(4)};
  margin-top: ${spacing(3)};
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${activeColor};
    background: ${disabledColor};
    border: transparent;
  }

  @media screen and (min-width: ${tablet}) {
    margin-bottom: ${spacing(5)};
  } ;
`;

export const Registration = styled.div`
  font: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: ${spacing(3.25)};
  line-height: ${spacing(4)};
  color: ${accentColor};
  text-decoration-line: underline;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${borderColor};
  }
`;
