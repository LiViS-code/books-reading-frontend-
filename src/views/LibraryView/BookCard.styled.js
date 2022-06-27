import styled from 'styled-components';
import { theme } from '../../constants/Theme';

const {
  colors: {
    accentColor,
    primaryColor,
    secondaryColor,
    activeColor,
    disabledColor,
  },
  fonts: { mainFont },
  fontSizing: { mainFontSize },
  media: { tablet, desktop },
} = theme;

export const Container = styled.div`
  width: 240px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
  padding: 20px 20px 8px 20px;
  background-color: ${activeColor};
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media screen and (min-width: ${tablet}) {
    width: 664px;
    margin-bottom: 0;
    margin-bottom: 8px;
    padding-top: 14px;
    flex-wrap: nowrap;
  }

  @media screen and (min-width: ${desktop}) {
    width: 1208px;
    padding: 23px 23px 22px 20px;
    // align-items: baseline;
  } ;
`;

export const Book = styled.div`
  margin-left: 12px;
  width: 206px;
  // height: 273px;

  @media screen and (min-width: ${tablet}) {
    display: flex;
    width: 624px;
    margin-left: 18px;
  }

  @media screen and (min-width: ${desktop}) {
    width: auto;
    // justify-content: space-between;
  } ;
`;

export const ListsContainer = styled.div`
  display: flex;
  margin-bottom: 6px;
`;

export const AttributeList = styled.div`
  list-style: none;
  width: 91px;

  @media screen and (min-width: ${tablet}) {
    display: none;
  } ;
`;

export const ValueList = styled.div`
  list-style: none;
  width: 125px;
  margin-right: 0;

  @media screen and (min-width: ${tablet}) {
    display: flex;
    align-items: center;
    width: auto;
  }

  @media screen and (min-width: ${desktop}) {
  } ;
`;

export const BookName = styled.p`
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.25;
  font-family: 'Montserrat';
  color: ${primaryColor};

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 0;
    width: 308px;
    margin-top: auto;
    margin-bottom: auto;
    font-size: ${mainFontSize};
  }

  @media screen and (min-width: ${desktop}) {
    width: 580px;
    margin-top: auto;
    margin-bottom: auto;
  } ;
`;

export const BookNameRed = styled.p`
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.25;
  font-family: 'Montserrat';
  color: ${primaryColor};

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 0;
    width: 156px;
    font-size: ${mainFontSize};
  }
  @media screen and (min-width: ${desktop}) {
    width: 301px;
    margin-top: auto;
    margin-bottom: auto;
    padding-right: 20px;
  } ;
`;

export const Attribute = styled.p`
  margin-bottom: 14px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.25;
  font-family: ${mainFont};
  color: ${secondaryColor};

  @media screen and (min-width: ${tablet}) {
    font-size: ${mainFontSize};
  } ;
`;

export const Author = styled.p`
  height: 15px;
  overflow: hidden;
  margin-bottom: 14px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.25;
  font-family: ${mainFont};
  color: ${primaryColor};

  @media screen and (min-width: ${tablet}) {
    margin-top: auto;
    margin-bottom: auto;
    font-size: ${mainFontSize};
    width: 206px;
    // max-height: 34px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 381px;
    height: 15px;
  } ;
`;

export const AuthorRed = styled.p`
  height: 15px;
  overflow: hidden;
  margin-bottom: 14px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.25;
  font-family: ${mainFont};
  color: ${primaryColor};

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 0;
    font-size: ${mainFontSize};
    width: 126px;
    height: 34px;
    padding-right: 20px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 258px;
    height: 15px;
    line-height: 1.21;
  } ;
`;

export const Year = styled.p`
  margin-bottom: 14px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.25;
  font-family: ${mainFont};
  color: ${primaryColor};

  @media screen and (min-width: ${tablet}) {
    width: 84px;
    margin-bottom: 0;
    font-size: ${mainFontSize};
  }

  @media screen and (min-width: ${desktop}) {
    width: 124px;
  } ;
`;

export const YearRed = styled.p`
  margin-bottom: 14px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.25;
  font-family: ${mainFont};
  color: ${primaryColor};

  @media screen and (min-width: ${tablet}) {
    width: 78px;
    margin-bottom: 0;
    font-size: ${mainFontSize};
  }

  @media screen and (min-width: ${desktop}) {
    width: 125px;
  } ;
`;

export const Pages = styled.p`
  margin-bottom: 14px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.25;
  font-family: ${mainFont};
  color: ${primaryColor};

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 0;
    font-size: ${mainFontSize};
  }

  @media screen and (min-width: ${desktop}) {
    width: 30px;
  } ;
`;

export const Icon = styled.svg`
  width: 22px;
  height: 17px;

  @media screen and (min-width: ${tablet}) {
    margin-top: auto;
    margin-bottom: auto;
  } ;
`;

export const ButtonResume = styled.button`
  width: 127px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  padding: 0;
  background-color: ${disabledColor};
  color: ${activeColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: 0;

  @media screen and (min-width: ${tablet}) {
    width: 80px;
    height: 40px;
    margin-left: 32px;
    margin-top: auto;
    margin-bottom: auto;
  }

  @media screen and (min-width: ${desktop}) {
    margin-left: 60px;
    margin-right: 0;
    width: 130px;
  }

  &:hover,
  &:focus {
    color: ${activeColor};
    background: ${accentColor};
    border: transparent;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 250ms ease;
  }
`;

export const ResumeSection = styled.div`
  margin-left: 54px;
`;

export const Stars = styled.div`
  display: flex;

  @media screen and (min-width: ${tablet}) {
    margin-left: 32px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-left: 110px;
  } ;
`;
