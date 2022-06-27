import styled from 'styled-components';
import { theme } from '../../../constants/Theme';
const {
  colors: { primaryColor },
  fonts: { mainFont },
} = theme;

export const Name = styled.p`
  margin-left: 14px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 38px;
  color: ${primaryColor};
`;
