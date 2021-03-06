import styled from 'styled-components';
import { theme } from '../../../constants/Theme';
import { NavLink } from 'react-router-dom';

const {
  colors: { primaryColor, backgroundColorForm, accentColor },
  fonts: { mainFont },
  media: { tablet },
} = theme;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (min-width: ${tablet}) {
    justify-content: end;
    align-items: end;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 5px;

  font-family: ${mainFont};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${primaryColor};

  &:hover,
  &:focus {
    background-color: ${backgroundColorForm};
    fill: ${accentColor};
  }
`;
