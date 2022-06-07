import styled from '@emotion/styled';
import { theme } from '../../constants/Theme';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: ${theme.spacing(10)};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 43px 20px 36px 20px;
  margin-bottom: ${theme.spacing(5)};
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  background-color: ${theme.colors.activeColor};
  @media (min-width: 768px) {
    padding: ${theme.spacing(10)};
  }
`;

export const ContentList = styled.ul`
  list-style: none;
  margin-bottom: ${theme.spacing(5)};
  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const ContentItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${theme.spacing(5)};
  }
  @media (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: ${theme.spacing(6)};
    }
  }
`;

export const Header = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${theme.colors.primaryColor};
  margin-bottom: 8px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const MotivationBlock = styled.span`
  display: flex;
  justify-content: flex-start;
  margin-bottom: ${theme.spacing(2)};
`;

export const Motivation = styled.p`
  font-weight: 600;
  font-size: ${theme.fontSizing.mainFontSize};
  line-height: 17px;
  color: ${theme.colors.primaryColor};
  margin-left: ${theme.spacing(3)};
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: ${theme.fontSizing.mainFontSize};
  line-height: 17px;
  color: ${theme.colors.secondaryColor};
  margin-left: ${theme.spacing(2)};
`;

export const DescriptionBlock = styled.span`
  display: flex;
  justify-content: start;
  margin-left: 30px;
  @media (min-width: 768px) {
    margin-left: 25px;
  }
`;
