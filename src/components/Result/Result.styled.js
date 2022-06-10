import styled from '@emotion/styled';

export const Section = styled.div`
  background-color: primaryColor;
  padding-bottom: 22px;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0;

  background-color: #ffffff;
  @media screen and (min-width: 767px) {
    max-width: 100%;
  }
  @media screen and (min-width: 1280px) {
    width: 388px;
  }
`;

export const Button = styled.button`
  width: 240px;
  height: 40px;
  border-color: #ff6b08;
  background-color: #ff6b08;
  color: #ffffff;
  display: block;
  font-size: 16px;
  font-family: Montserrat;

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

export const Labels = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Text = styled.label`
  margin-bottom: 4px;
  color: #898f9f;
  font-family: Montserrat;
  font-size: 11px;
`;
export const Title = styled.h3`
  font-family: Montserrat;
  color: #242a37;

  text-align: center;
  line-height: 1.2191;
  margin-bottom: 12px;
  font-weight: 600;
`;
export const Amount = styled.div`
  display: flex;

  justify-content: space-evenly;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
export const Input = styled.input`
  width: 110px;
  height: 42px;
  border-color: 1px #a6abb9;

  background-color: #e0e5eb;
  :hover {
    border-color: 1px #a6abb9;
  }
  :focus {
    border-color: 1px #a6abb9;
  }
  ::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    background: url('../image/svg/polygon1.svg') no-repeat;
    width: 20px;
    height: 20px;
    border-width: thin;
  }
`;
export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
  @media screen and (min-width: 1278px) {
    margin-top: 28px;
  }
`;
export const Statistic = styled.h3`
  font-family: Montserrat;
  text-align: center;
  font-weight: 700;
  line-height: 1.2191;
  color: #242a37;
  margin-top: 24px;
`;
export const Image = styled.img`
  background-color: inherit;
  display: block;
  width: 40px;
  height: 40px;
`;

export const AddResult = styled.div`
@media screen and (min-width: 768px){
    display: flex;  
    align-items:center;
    




justify-content: space-evenly;
    @media screen and (min-width: 1278px)  {
      flex-direction: column;
    }
`;
