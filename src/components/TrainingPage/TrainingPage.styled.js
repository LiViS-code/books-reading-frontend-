import styled from 'styled-components';
import { theme } from '../../constants/Theme';
const {
  colors: { activeColor, headingBackground },
  media: { tablet, desktop },
  spacing,
} = theme;

export const Heading = styled.h2`
  color: ${activeColor};
  background-color: ${headingBackground};
  padding: ${spacing(4.3)} 0;
  width: 280px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  @media (min-width: ${tablet}) {
    width: 100%;
  }
  @media (min-width: ${desktop}) {
    width: 928px;
  }
`;
