import styled from '@emotion/styled';
import { theme } from '../../constants/Theme';

export const PrimaryButton = styled.button`
  font: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid ${theme.colors.primaryColor};
  width: 171px;
  height: 42px;
  transition: background-color ${theme.transition.timing}
    ${theme.transition.timingFunction};
  &:hover,
  &:focus {
    border: transparent;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    background-color: ${theme.colors.accentColor};
    color: ${theme.colors.activeColor};
  }
  @media screen and (min-width: 1280px) {
    width: 181px;
    height: 42px;
  }
`;
