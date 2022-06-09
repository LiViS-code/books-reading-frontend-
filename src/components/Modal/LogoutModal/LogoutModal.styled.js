import styled from '@emotion/styled';
import { theme } from '../../../constants/Theme';
const {
  colors: { accentColor, activeColor, primaryColor },
  fonts: { mainFont },
  fontSizing: { preTitleFontSize, mainFontSize },
  media: { tablet },
} = theme;

export const LogoutContent = styled.div`
  width: 280px;
  height: 222px;

  @media screen and (min-width: ${tablet}) {
    width: 394px;
    height: 204px;
  }
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${preTitleFontSize};
  line-height: 22px;
  text-align: center;
  color: ${primaryColor};
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Back = styled.button`
  margin-top: 0;
  padding: 0;
  margin-right: 16px;
  box-sizing: border-box;

  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${mainFontSize};
  line-height: 17px;
  color: ${primaryColor};
  text-align: center;
  cursor: pointer;

  width: 98px;
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

  @media screen and (min-width: ${tablet}) {
    width: 130px;
    height: 40px;
    margin-right: 28px;
  }
`;
export const Save = styled.button`
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

  width: 98px;
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
    width: 130px;
    height: 40px;
  }
`;
