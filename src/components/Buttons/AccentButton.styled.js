import styled from '@emotion/styled';
import { theme } from '../../constants/Theme';

export const AccentButton = styled.button`
  font: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: ${theme.fontSizing.mainFontSize};
  line-height: 17px;
  box-sizing: border-box;
  width: 171px;
  height: 42px;
  border: transparent;
  background-color: ${theme.colors.accentColor};
  color: ${theme.colors.activeColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  transition: background-color ${theme.transition.timing}
    ${theme.transition.timingFunction};

  &:hover,
  &:focus {
    background-color: transparent;
    border: 1px solid ${theme.colors.primaryColor};
    box-shadow: none;
  }

  @media screen and (min-width: 1280px) {
    width: 181px;
    height: 42px;
  }
`;
