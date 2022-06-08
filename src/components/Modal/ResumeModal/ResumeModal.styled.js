import styled from '@emotion/styled';
import { theme } from '../../../constants/Theme';
const {
  colors: { accentColor, activeColor, outlineColor, primaryColor },
  fonts: { mainFont },
  fontSizing: { preTitleFontSize, mainFontSize },
  media: { tablet },
} = theme;

export const Content = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;

  background: ${activeColor};
  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
`;

export const Title = styled.p`
  padding: 0px;
  margin-top: 0;
  margin-bottom: 20px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${preTitleFontSize};
  line-height: ${theme.spacing(20)};
  color: ${primaryColor};

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 12px;
  }
`;
export const Stars = styled.div`
  margin-bottom: 20px;
  position: relative;
  font-size: 18px;
  color: ${outlineColor};
`;
export const Resume = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${preTitleFontSize};
  line-height: ${theme.spacing(20)};
  color: ${primaryColor};

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 12px;
  }
`;

export const Textarea = styled.textarea`
  width: 240px;
  height: 170px;
  margin-bottom: 20px;
  border: 1px solid ${outlineColor};
  box-sizing: border-box;
  resize: none;
  padding: 8px;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 28px;
    width: 568px;
    height: 170px;
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
  margin-right: 16px;
  box-sizing: border-box;

  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${mainFontSize};
  line-height: ${theme.spacing(17)};
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
  line-height: ${theme.spacing(17)};
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
