import styled from '@emotion/styled';
import { theme } from '../../constants/Theme';
const {
  media: { tablet },
} = theme;

export const Div = styled.div`
  display: flex;
  background-color: white;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  @media (min-width: ${tablet}) {
    padding: 21px 32px;
    justify-content: space-between;
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
