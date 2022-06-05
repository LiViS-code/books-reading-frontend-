import { createGlobalStyle } from 'styled-components';
import { theme } from './constants/Theme';
const {
  colors: { primaryColor, backgroundColor },
  fonts: { mainFont },
  fontSizing: { mainFontSize },
} = theme;
export const GlobalStyle = createGlobalStyle`
  body {
     width: 100vw;
    overflow-x: hidden;
    margin:0;
    font-family: ${mainFont};
    font-size:${mainFontSize};
    color:${primaryColor};
    background-color:${backgroundColor};
  }
h1,
h2,
h3,
h4,
h5,
h6,
p,
button,
ul,
ol,
li {
  margin-top: 0;
  margin-bottom: 0;
}
ul {
  padding-left: 0;
}
img,
a,
button {
  display: block;
}
a {
  outline: none;
}
.link {
  text-decoration: none;
  font-style: normal;
  color: inherit;
}
.list {
  list-style: none;
}`;
