import styled from 'styled-components';
import { theme } from '../../../constants/Theme';
const {
  colors: { primaryColor },
  fonts: { titleFont },
  media: { tablet },
} = theme;

export const LogoStyle = styled.div`
  font-family: ${titleFont};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.35;
  color: ${primaryColor};

  @media (min-width: ${tablet}) {
    //margin-right: 248px;
  }
`;
