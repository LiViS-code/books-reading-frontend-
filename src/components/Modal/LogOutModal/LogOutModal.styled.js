import styled from '@emotion/styled';
import { theme } from '../../../constants/Theme';
const {
  colors: { primaryColor },
  fonts: { mainFont },
  fontSizing: { preTitleFontSize },
  media: { tablet },
  spacing,
} = theme;

export const LogoutContent = styled.div`
  width: ${spacing(70)};
  height: ${spacing(55.5)};

  @media screen and (min-width: ${tablet}) {
    width: ${spacing(98.5)};
    height: ${spacing(51)};
  }
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: ${spacing(5)};
  padding-top: ${spacing(12)};
  padding-left: ${spacing(8)};
  padding-right: ${spacing(8)};
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${preTitleFontSize};
  line-height: ${spacing(5.5)};
  text-align: center;
  color: ${primaryColor};
`;
