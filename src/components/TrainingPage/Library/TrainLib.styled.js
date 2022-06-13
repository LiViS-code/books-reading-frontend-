import styled from 'styled-components';
import { theme } from '../../../constants/Theme';
const {
  colors: { activeColor },
  media: { tablet },
  //   spacing,
} = theme;
export const StyledList = styled.ul`
  padding: 20px;
  @media screen and (min-width: ${tablet}) {
    padding: 40px;
  }
  margin-bottom: 40px;
  background-color: ${activeColor};
  @media screen and (min-width: ${tablet}) {
    margin-bottom: 0px;
  }
  & li:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const StyledText = styled.p`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  @media screen and (min-width: ${tablet}) {
    font-size: 19px;
    margin-bottom: 16px;
  }
`;
