import styled from '@emotion/styled';
// import { theme } from '../../../constants/Theme';

export const Body = styled.div`
  background-color: primaryColor;
  padding: 0;
  margin: 0;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 40px;

  @media screen and (max-width: 320px) and (min-width: 767px) {
    display: none;
  }
`;
export const Main = styled.h2`
  text-align: center;
  font-size: 34px;
  line-height: 1.1176;
  font-family: 'Abril Fatface';
  color: 242a37;
  margin: 0;
  padding-top: 32px;
  margin-bottom: 32px;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
  margin-bottom: 14px;
  font-family: 'Montserrat';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.9;
`;

export const First = styled.div`
  display: inline;
  padding: 0;
  margin: 0;
  margin-bottom: 12px;
  color: #242a37;
`;

export const Second = styled.div`
  padding: 0;
  margin: 0;
  margin-bottom: 60px;
  color: #242a37;
`;

export const Icon = styled.svg`
margin-right: 12px;
fill: rgba(255, 107, 8, 1);
width: 4px;
height: 8px;
background-color: inherit;
}
`;

export const Text = styled.p`
display: flex;
  color: #898f9f;
  font-family: inherit;
  font-weight: 14px;
  line-height: 1.2142;
  margin-bottom: 12px;
 
  };

`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  border-color: black;
  background-color: inherit;

  padding: 0;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 250ms var(--timing-function);
  :hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    background-color: #ff6b08;
    border-color: #ff6b08;
    color: white;
  }
  :focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    background-color: #ff6b08;
    border-color: #ff6b08;
    color: white;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Image = styled.img`
  margin-right: 12px;
`;
