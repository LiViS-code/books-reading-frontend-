import styled from '@emotion/styled';
import { theme } from '../../../constants/Theme';

const { accentColor, primaryColor, secondaryColor } = theme.colors;
const { spacing } = theme;
const { tablet, desktop } = theme.media;

export const FormTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: ${spacing(5)};
  padding-right: ${spacing(5)};
  @media screen and (min-width: ${desktop}) {
    margin-top: ${spacing(10)};
    width: 730px;
  }
`;

export const Quotes = styled.div`
  font-size:59px;
  font-family:'Abril Fatface';
  color:${accentColor};
  vertical-align: middle;
  margin-top:${spacing(1)};
  margin-left:auto;
  margin-right:auto;
  @media screen and (min-width: ${tablet}) {
    margin-top:${spacing(16)};
  }
  }`;

export const QuotesText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: ${spacing(-8)};
  text-align: center;
  color: ${primaryColor};
  font-weight: 500;
  width: 229px;
  margin-bottom: ${spacing(4)};
  @media screen and (min-width: ${tablet}) {
    width: 526px;
    font-size: 24px;
    margin-top: ${spacing(-5)};
    margin-bottom: 0;
    line-height: 38px;
  }

  ::after {
    content: '';
    border-bottom: solid 1px rgba(36, 42, 55, 0.5);
    width: 100px;
    margin-bottom: 16px;
    margin-top: 16px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (min-width: ${tablet}) {
      margin-top: ${spacing(5)};
      margin-bottom: ${spacing(3)};
    }
  }
`;

export const Title = styled.div`
  color: ${secondaryColor};
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: ${tablet}) {
    font-size: 20px;
    margin-bottom: 70px;
  }
`;
