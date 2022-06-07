import styled from '@emotion/styled';
import img from '../../../image/picture-min.jpg';
import { theme } from '../../../constants/Theme';

const { accentColor, activeColor } = theme.colors
const { mainFont } = theme.fonts
console.log(accentColor)

export const BackgroundContainer = styled.div`
  background:linear-gradient(0deg, rgba(9, 30, 63, 0.8), rgba(9, 30, 63, 0.8)), url(${img});
  width:100vw; 
  background-size:100%;

`;

export const FormContainer = styled.div`
  
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 32px;
  padding-bottom: 32px;
 
 

   @media screen and (min-width: 1280px) {
   margin-top: 40px;

  }
`;
export const GoogleButton = styled.div`
 
  margin-right:auto;
  margin-left:auto;
  margin-bottom:28px;
  display: flex;
  justify-content:center;
  align-items: center;
  width: 150px;
  height: 40px;
  background-color:${activeColor};
  font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 38px;
color: #707375;
  
`;
export const GoogleImage = styled.div`
  position: absolute;
left: 30.94%;
right: 63.44%;
top: 15.9%;
bottom: 81.33%;
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const StarContainer = styled.div`
 color:${accentColor};
 position:absolute;
 top:-2px;
 left:146px;
`;

export const StarContainer2 = styled.div`
 color:${accentColor};
 position:absolute;
 top:-2px;
 left:58px;
`;

export const InputWrapper = styled.div`
 position:relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 42px;
  border: 1px solid #a6abb9;
  padding: 12px 12px 13px 12px;
  margin-top: 8px;
  margin-bottom: 20px;
  background-color: ${activeColor};
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    margin-right: 32px;
    margin-bottom: 24px;
    width: ${props => {
    switch (props.name) {
      case 'title':
        return '704px';
      case 'name':
        return '336px';
      case 'year':
        return '152px';
      case 'pages':
        return '152px';
      default:
        break;
    }
  }};
  }
  @media screen and (min-width: 1280px) {
    margin-right: 16px;
    width: ${props => {
    switch (props.name) {
      case 'title':
        return '346px';
      case 'name':
        return '250px';
      case 'year':
        return '134px';
      case 'pages':
        return '134px';
      default:
        break;
    }
  }};
  }
  :focus {
    background-color: #ffffff;
    box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
    border: transparent;
    outline: none;
  }
`;

export const Label = styled.label`
  color: ${activeColor};
  font:${mainFont};
 
`;

export const InputContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const NumberDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1280px) {
    margin-left: 24px;
    align-items: center;
  }
`;
export const LoginButton = styled.button`

  font: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color:${activeColor};
  background-color: ${accentColor};
  border: 1px solid #242a37;
  width: 280px;
  height: 60px;
  margin-bottom:16px;
  &:hover,
  &:focus {
    border: transparent;
    background-color: #ff6b08;
    color: #ffffff;
  }
  @media screen and (min-width: 1280px) {
    width: 181px;
    height: 42px;
  }
`;

export const Registration = styled.div`

  font: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color:${accentColor};
  text-decoration-line: underline;
  margin-left:auto;
  margin-right:auto;
  text-align:center;

  
  
  
`;
