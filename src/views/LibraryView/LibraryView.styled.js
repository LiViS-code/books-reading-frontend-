import styled from 'styled-components';
import { theme } from '../../constants/Theme';

const {
  colors: {
    primaryColor,
    secondaryColor,
    accentColor,
    activeColor,
    backgroundColor,
    disabledColor,
  },
  fonts: { mainFont },
  fontSizing: { mainFontSize, preTitleFontSize, titleFontSize },
  media: { tablet, desktop },
} = theme;

export const Library = styled.div`
  width: 280px;
  padding: 0;
  // margin-left: auto;
  // margin-right: auto;
  background-color: ${backgroundColor};

  @media screen and (min-width: ${tablet}) {
    width: 704px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 1248px;
  } ;
`;

export const Title = styled.p`
  font-size: ${titleFontSize};
  font-weight: 600;
  line-height: 1.21;
  font-style: normal;
  font-family: ${mainFont};
  color: ${primaryColor};
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: ${tablet}) {
    margin-top: 40px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${desktop}) {
  } ;
`;

export const AttributeListDesktop = styled.div`
  display: none;
  font-size: ${mainFontSize};
  color: ${secondaryColor};

  @media screen and (min-width: ${tablet}) {
    display: flex;
    margin-bottom: 8px;
  } ;
`;

export const List = styled.ul`
  @media screen and (min-width: ${tablet}) {
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-size: ${mainFontSize};
  } ;
`;

export const ButtonTraining = styled.button`
  width: 171px;
  height: 42px;
  border: 0px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 28px;
  margin-bottom: 64px;
  padding: 11px 15px;
  background-color: ${accentColor};
  cursor: pointer;
  font-size: ${preTitleFontSize};
  font-weight: 600;
  line-height: 1.22;
  color: ${activeColor};

  &:focus,
  &:hover {
    color: ${activeColor};
    background: ${disabledColor};
    border: transparent;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 250ms ease;

    @media screen and (min-width: ${tablet}) {
      margin-top: 40px;
    }
    @media screen and (min-width: ${desktop}) {
      width: 200px;
      heigth: 40px;
    }
  }
`;

export const ButtonName = styled.p`
  font-size: ${preTitleFontSize};
  font-weight: 600;
  line-height: 1.22;
  color: ${activeColor};

  &:focus,
  &:hover {
    color: ${primaryColor};
  }
`;

export const ButtonAdd = styled.button`
  position: sticky;
  bottom: 0;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 0px;
  margin-left: auto;
  margin-right: auto;
  padding: 18px;
  background-color: ${accentColor};
  cursor: pointer;

  @media screen and (min-width: ${tablet}) {
    display: none;
  }

  &:hover,
  &:focus {
    color: ${activeColor};
    background: ${disabledColor};
    border: transparent;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 250ms ease;
  }
`;

export const AttributeBook = styled.p`
  width: 368px;
  font-family: ${mainFont};

  @media screen and (min-width: ${desktop}) {
    width: 640px;
    margin-right: 0;
  } ;
`;

export const AttributeAuthor = styled.p`
  @media screen and (min-width: ${tablet}) {
    width: 214px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 389px;
  } ;
`;

export const AttributeYear = styled.p`
  @media screen and (min-width: ${tablet}) {
    width: 63px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 103px;
  } ;
`;

export const AttributePages = styled.p`
  @media screen and (min-width: ${tablet}) {
  } ;
`;

export const AttributeRating = styled.p`
  @media screen and (min-width: ${tablet}) {
  } ;
`;
