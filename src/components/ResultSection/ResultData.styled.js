import styled from '@emotion/styled';
import { theme } from '../../constants/Theme';

const {
  colors: { primaryColor, secondaryColor, activeColor, disabledColor },
  fonts: { mainFont },
  fontSizing: { mainFontSize },
  media: { tablet, desktop },
} = theme;

export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto 20px;

  @media screen and (min-width: ${tablet}) {
    justify-content: flex-start;
  }

  @media screen and (min-width: '1280px') {
  } ;
`;

export const Day = styled.div`
  color: #242a37;

  @media screen and (min-width: ${tablet}) {
    margin-right: 30px;
  } ;
`;

export const Hour = styled.div`
  color: #898f9f;

  @media screen and (min-width: ${tablet}) {
    margin-right: 30px;
  } ;
`;

export const Page = styled.div`
  display: flex;
  color: #242a37;

  @media screen and (min-width: ${tablet}) {
    margin-right: 30px;
  } ;
`;

export const PageWord = styled.div`
  color: #898f9f;
`;
