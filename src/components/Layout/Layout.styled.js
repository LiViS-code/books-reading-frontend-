import styled from 'styled-components';
import { theme } from '../../constants/Theme';
const {
  colors: { backgroundColor },
  media: { mobile, tablet, desktop },
  spacing,
} = theme;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 ${spacing(5)};
  background-color: ${backgroundColor};
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${mobile}) {
    width: ${mobile};
  }
  @media (min-width: ${tablet}) {
    width: ${tablet};
    padding: 0 ${spacing(8)};
  }
  @media (min-width: ${desktop}) {
    width: ${desktop};
    padding: 0 ${spacing(4)};
  }
`;
