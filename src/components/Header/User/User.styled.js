import styled from 'styled-components';
import { theme } from '../../../constants/Theme';
const {
  media: { tablet },
  colors: { primaryColor, backgroundColorForm },
  fonts: { mainFont },
} = theme;

export const Name = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: ${backgroundColorForm};

  font-family: ${mainFont};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${primaryColor};
`;

export const UserName = styled.span`
  visibility: hidden;
  @media (min-width: ${tablet}) {
    visibility: visible;
  }
`;
