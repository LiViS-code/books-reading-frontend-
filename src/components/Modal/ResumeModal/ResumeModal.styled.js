import styled from '@emotion/styled';
import { theme } from '../../../constants/Theme';
const {
  colors: { accentColor, activeColor, outlineColor, primaryColor },
  fonts: { mainFont },
  fontSizing: { preTitleFontSize, mainFontSize },
  media: { tablet },
  spacing,
} = theme;

export const Content = styled.form`
  padding-top: ${spacing(5)};
  padding-left: ${spacing(5)};
  padding-right: ${spacing(5)};
  padding-bottom: ${spacing(10)};

  background: ${activeColor};
  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
`;

export const Title = styled.p`
  padding: 0px;
  margin-top: 0;
  margin-bottom: ${spacing(5)};
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${preTitleFontSize};
  line-height: ${spacing(5)};
  color: ${primaryColor};

  @media screen and (min-width: ${tablet}) {
    margin-bottom: ${spacing(3)};
  }
`;
export const Stars = styled.div`
  margin-bottom: ${spacing(5)};
  position: relative;
  font-size: ${spacing(4.5)};
  color: ${outlineColor};
  ::before {
    content: '☆☆☆☆☆';
  }
`;
export const Resume = styled.p`
  margin-top: 0;
  margin-bottom: ${spacing(2)};
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${preTitleFontSize};
  line-height: ${spacing(5)};
  color: ${primaryColor};

  @media screen and (min-width: ${tablet}) {
    margin-bottom: ${spacing(3)};
  }
`;

export const Textarea = styled.textarea`
  width: ${spacing(60)};
  height: ${spacing(42.5)};
  margin-bottom: ${spacing(5)};
  border: 1px solid ${outlineColor};
  box-sizing: border-box;
  resize: none;
  padding: ${spacing(2)};

  @media screen and (min-width: ${tablet}) {
    margin-bottom: ${spacing(7)};
    width: ${spacing(142)};
    height: ${spacing(42.5)};
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Back = styled.button`
  margin-top: 0;
  padding: 0;
  margin-right: ${spacing(4)};
  box-sizing: border-box;

  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${mainFontSize};
  line-height: ${spacing(4.25)};
  color: ${primaryColor};
  text-align: center;
  cursor: pointer;

  width: ${spacing(24.5)};
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

  @media screen and (min-width: ${tablet}) {
    width: ${spacing(32.5)};
    height: ${spacing(10)};
    margin-right: ${spacing(7)};
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

  width: ${spacing(24.5)};
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
    width: ${spacing(32.5)};
    height: ${spacing(10)};
  }
`;
