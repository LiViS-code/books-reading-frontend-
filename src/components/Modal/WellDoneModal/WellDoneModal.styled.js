import styled from '@emotion/styled';
import { theme } from '../../../constants/Theme';
const {
  colors: { accentColor, activeColor, primaryColor, borderColor },
  fonts: { mainFont },
  fontSizing: { preTitleFontSize, mainFontSize },
  media: { tablet },
} = theme;

export const WellDoneContent = styled.div`
  width: 280px;
  height: 358px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  @media screen and (min-width: ${tablet}) {
    width: 394px;
    height: 286px;
  }
`;
export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
  padding-left: 64px;
  padding-right: 64px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${preTitleFontSize};
  line-height: 22px;
  text-align: center;
  color: ${primaryColor};

  @media screen and (min-width: ${tablet}) {
    padding-left: 52px;
    padding-right: 52px;
    margin-bottom: 24px;
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
  padding-top: 44px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  fill: ${borderColor};

  @media screen and (min-width: ${tablet}) {
    padding-top: 40px;
  }
`;

export const Icon = styled.img`
  width: 54px;
  height: 54px;
`;
export const Back = styled.button`
  margin-top: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${mainFontSize};
  line-height: 17px;
  color: ${primaryColor};
  text-align: center;
  cursor: pointer;

  width: 152px;
  height: 40px;
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
  margin-bottom: 20px;
  box-sizing: border-box;

  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${mainFontSize};
  line-height: 17px;
  color: ${activeColor};
  text-align: center;
  cursor: pointer;

  width: 152px;
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

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 0px;
    margin-right: 32px;
  }
`;
