import styled from '@emotion/styled';
import { theme } from '../../constants/Theme';
const {
  media: { tablet, desktop },
} = theme;

export const Div = styled.div`
  /* width: 280px; */
  width: 100%;
  display: flex;
  background-color: white;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  @media (min-width: ${tablet}) {
    padding: 21px 32px;
    justify-content: space-between;
    width: 704px;
  }
  @media (min-width: ${desktop}) {
    padding: 16px;
    width: 1248px;
  }
`;

export const MobDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
`;
export const Container = styled.div`
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  width: 100%;
`;
