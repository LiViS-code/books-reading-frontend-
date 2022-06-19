import styled from '@emotion/styled';
import { theme } from '../../../constants/Theme';
const {
  colors: { accentColor, activeColor, primaryColor, disabledColor },
  fonts: { mainFont },
  fontSizing: { preTitleFontSize, mainFontSize },
  media: { tablet },
  spacing,
} = theme;

export const CongratulationsContent = styled.div`
  width: ${spacing(70)};
  height: ${spacing(64)};
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  @media screen and (min-width: ${tablet}) {
    width: ${spacing(98.5)};
    height: ${spacing(64)};
  }
`;
export const Text = styled.p`
  margin-top: 0;
  margin-bottom: ${spacing(6)};
  padding-left: ${spacing(6.75)};
  padding-right: ${spacing(6.75)};
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${preTitleFontSize};
  line-height: ${spacing(5.5)};
  text-align: center;
  color: ${primaryColor};

  @media screen and (min-width: ${tablet}) {
    padding-left: ${spacing(20.75)};
    padding-right: ${spacing(20.75)};
    margin-bottom: ${spacing(6)};
  }
`;

export const Svg = styled.div`
  padding-top: ${spacing(11)};
  margin-bottom: ${spacing(5)};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${spacing(13.5)};
  height: ${spacing(13.5)};
  color: ${accentColor};

  @media screen and (min-width: ${tablet}) {
    padding-top: ${spacing(10)};
    margin-bottom: ${spacing(3.5)};
  }
`;

export const Icon = styled.img`
  width: ${spacing(13.5)};
  height: ${spacing(13.5)};
  fill: ${accentColor};
`;
export const Done = styled.button`
  margin: 0;
  padding: 0;

  box-sizing: border-box;

  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${mainFontSize};
  line-height: ${spacing(4.25)};
  color: ${activeColor};
  text-align: center;
  cursor: pointer;

  width: ${spacing(32.5)};
  height: ${spacing(10)};
  background: ${accentColor};
  border: 1px solid ${accentColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus {
    color: ${activeColor};
    border: transparent;
    background: ${disabledColor};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 250ms ease;
  }
`;
