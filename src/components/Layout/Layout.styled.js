import styled from 'styled-components';
import { theme } from '../../constants/Theme';
const {
  spacing,
  colors: { primaryColor, backgroundColorForm, backgroundColor, boxShadow },
  media: { mobile, tablet, desktop },
} = theme;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: ${backgroundColor};
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${mobile}) {
    width: ${mobile};
  }
  @media (min-width: ${tablet}) {
    width: ${tablet};
    padding: 0 32px;
  }
  @media (min-width: ${desktop}) {
    width: ${desktop};
    padding: 0 32px;
  }
`;
