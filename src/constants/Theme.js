export const theme = Object.freeze({
  colors: {
    primaryColor: '#242A37',
    secondaryColor: '#898F9F',
    accentColor: '#FF6B08',
    activeColor: '#FFFFFF',

    // change according to layout
    disabledColor: '#6D7A8D',
    outlineColor: '#A6ABB9',
    backgroundColor: '#F6F7FB',
    backgroundColorForm: '#F5F7FA',
    borderDisabledColor: '#999999',
    borderColor: '#A6ABB9',
    backgroundDisabledColor: '#cccccc',
    overlayColor: '#002B2B2B',
    boxShadow: `0px 1px 2px 0px rgba(#1D1D1B, 0.15)`,
  },
  transition: {
    timing: '250ms',
    timingFunction: `cubic-bezier(0.075, 0.82, 0.165, 1)`,
  },
  fonts: {
    mainFont: 'Montserrat',
    titleFont: 'Abril Fatface',
    numbersFont: 'Open Sans',
  },
  fontSizing: {
    mainFontSize: '14px',
    preTitleFontSize: '16px',
    titleFontSize: '19px',
    headingFontSize: '34px',
  },
  media: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1280px',
  },

  spacing: value => `${4 * value}px`,
});
