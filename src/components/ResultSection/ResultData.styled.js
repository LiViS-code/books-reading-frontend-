import styled from '@emotion/styled';
import { theme } from '../../constants/Theme';

const {
  media: { tablet },
} = theme;

export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto 20px;

  @media screen and (min-width: ${tablet}) {
    justify-content: flex-start;
  }

  @media screen and (min-width: '1280px') {
    justify-content: space-between;
  } ;
`;

export const Day = styled.div`
  color: #242a37;
  width: 70px;

  @media screen and (min-width: ${tablet}) {
    margin-right: 0px;
  } ;
`;

export const Hour = styled.div`
  color: #898f9f;

  @media screen and (min-width: ${tablet}) {
    width: 104px;
    margin-right: 0px;
    text-align: center;
  } ;
`;

export const Page = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70px;
  color: #242a37;

  @media screen and (min-width: ${tablet}) {
    width: 70px;
    margin-right: 0px;
    justify-content: center;
  } ;
`;

export const PageWord = styled.div`
  color: #898f9f;
`;
