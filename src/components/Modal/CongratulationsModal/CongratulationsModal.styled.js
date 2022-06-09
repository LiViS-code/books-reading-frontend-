import styled from '@emotion/styled';
import { theme } from '../../../constants/Theme';
const {
  colors: { accentColor, activeColor, primaryColor },
  fonts: { mainFont },
  fontSizing: { preTitleFontSize, mainFontSize },
  media: { tablet },
} = theme;

export const CongratulationsContent = styled.div`
  width: 280px;
  height: 256px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  @media screen and (min-width: ${tablet}) {
    width: 394px;
    height: 256px;
  }
`;
export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 24px;
  padding-left: 27px;
  padding-right: 27px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${preTitleFontSize};
  line-height: 22px;
  text-align: center;
  color: ${primaryColor};

  @media screen and (min-width: ${tablet}) {
    padding-left: 83px;
    padding-right: 83px;
    margin-bottom: 24px;
  }
`;

export const Svg = styled.div`
  padding-top: 44px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  color: ${accentColor};

  @media screen and (min-width: ${tablet}) {
    padding-top: 40px;
    margin-bottom: 14px;
  }
`;

export const Icon = styled.img`
  width: 54px;
  height: 54px;
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
  line-height: 17px;
  color: ${activeColor};
  text-align: center;
  cursor: pointer;

  width: 130px;
  height: 40px;
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
`;