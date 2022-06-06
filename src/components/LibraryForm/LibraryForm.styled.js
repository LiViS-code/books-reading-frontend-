import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 32px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 1280px) {
    margin-top: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const InputWrapper = styled.div`
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
  background-color: #f6f7fb;
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
  color: #898f9f;
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
export const AddButton = styled.button`
  // min-width: 171px;
  // height: 41px;
  // border: 1px solid #242a37;
  // color: #000000;
  // font-size: 14px;
  // line-height: 17px;
  // font-style: normal;
  // font-weight: 500;
  // font: inherit;
  // background-color: transparent;
  // @media screen and (min-width: 1280px) {
  //   min-width: 181px;
  //   height: 42px;
  // }
  font: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  box-sizing: border-box;
  background-color: transparent;
  border: 1px solid #242a37;
  width: 171px;
  height: 42px;
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
