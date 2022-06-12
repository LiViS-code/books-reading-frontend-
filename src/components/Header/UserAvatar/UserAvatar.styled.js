import styled from 'styled-components';
import { theme } from '../../../constants/Theme';
const {
  colors: { primaryColor, backgroundColorForm },
  fonts: { mainFont },
} = theme;

export const Avatar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: ${backgroundColorForm};
  margin-right: 14px;

  font-family: ${mainFont};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${primaryColor};
`;
