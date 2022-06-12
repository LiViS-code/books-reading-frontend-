import styled from '@emotion/styled';
import { theme } from '../../../constants/Theme';
const {
  colors: { accentColor, activeColor, outlineColor, primaryColor },
  fonts: { mainFont },
  fontSizing: { preTitleFontSize, mainFontSize },
  media: { tablet },
  spacing,
} = theme;

export const WellDoneContent = styled.div`
  width: ${spacing(70)};
  height: ${spacing(89.5)};
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  @media screen and (min-width: ${tablet}) {
    width: ${spacing(98.5)};
    height: ${spacing(71.5)};
  }
`;
export const Text = styled.p`
  margin-top: 0;
  margin-bottom: ${spacing(5)};
  padding-left: ${spacing(16)};
  padding-right: ${spacing(16)};
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${preTitleFontSize};
  line-height: ${spacing(5.5)};
  text-align: center;
  color: ${primaryColor};

  @media screen and (min-width: ${tablet}) {
    padding-left: ${spacing(13)};
    padding-right: ${spacing(13)};
    margin-bottom: ${spacing(6)};
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
  }
`;

export const Svg = styled.div`
  padding-top: ${spacing(11)};
  margin-bottom: ${spacing(3.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${spacing(13.5)};
  height: ${spacing(13.5)};
  fill: ${outlineColor};

  @media screen and (min-width: ${tablet}) {
    padding-top: ${spacing(10)};
  }
`;

export const Icon = styled.img`
  width: ${spacing(13.5)};
  height: ${spacing(13.5)};
`;
export const Back = styled.button`
  margin-top: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${mainFontSize};
  line-height: ${spacing(4.25)};
  color: ${primaryColor};
  text-align: center;
  cursor: pointer;

  width: ${spacing(38)};
  height: ${spacing(10)};
  border: 1px solid ${primaryColor};
  background: ${activeColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus {
    color: ${activeColor};
    background: ${accentColor};
    border: 1px solid ${accentColor};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 250ms ease;
  }
`;
export const NewTraining = styled.button`
  margin: 0;
  padding: 0;
  margin-bottom: ${spacing(5)};
  box-sizing: border-box;

  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${mainFontSize};
  line-height: ${spacing(4.25)};
  color: ${activeColor};
  text-align: center;
  cursor: pointer;

  width: ${spacing(38)};
  height: ${spacing(10)};
  background: ${accentColor};
  border: 1px solid ${accentColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus {
    color: ${primaryColor};
    border: 1px solid ${primaryColor};
    background: ${activeColor};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 250ms ease;
  }

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 0px;
    margin-right: ${spacing(8)};
  }
`;
