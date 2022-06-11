import styled from 'styled-components';
import { theme } from '../../../constants/Theme';
const {
  colors: { primaryColor },
} = theme;

export const Button = styled.button`
display: flex;
  padding: 0;
  margin: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  align-items: center;

  }
`;

export const Text = styled.p`
color: ${primaryColor};
text-decoration-line: underline;
&:hover,
&:focus {
  color: red;
`;
