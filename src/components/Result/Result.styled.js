import styled from '@emotion/styled';
import Line from '../../image/svg/line.svg';
import LineLarge from '../../image/svg/line2.svg';
import Polygon from '../../image/svg/polygon1.svg';

export const Text = styled.label`
  margin-bottom: 4px;
  color: #898f9f;
  font-family: Montserrat;
  font-size: 11px;
`;

export const Amount = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
export const InputNewDate = styled.input`
  width: 110px;
  height:42px;
  font-size: 14px;
  line-height: 1.21;
  margin right:20px;
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
    background: url(${Polygon}) no-repeat;
    width: 20px;
    height: 20px;
    border-width: thin;
  }
`;

export const Title = styled.h2`
  font-family: Montserrat;
  color: #242a37;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.21;
  margin-bottom: 12px;
  @media screen and (min-width: 768) {
    font-size: 14px;
    margin-bottom: 27px;
  }
  @media screen and (min-width: 1280) {
    font-size: 12px;
    align-items: center;
    margin-bottom: 12px;
  }
`;

export const ButtonDate = styled.button`
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

export const ResultSection = styled.div`
  margin-top: 25px;
  margin-bottom: 24px;
  background-color: #ffffff;
  padding-bottom: 22px;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
  @media screen and (min-width: 1280px) {
    width: 388px;
  }
`;

export const AddResult = styled.div`
@media screen and (min-width: 768px){
display: flex;  
margin-bottom:20px;
justify-content: space-evenly;
align-items: center;

    @media screen and (min-width: 1280px)  {
      flex-direction: column;
      align-items: center;
   
    }
`;
export const Labels = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media screen and (min-width: 768) {
    margin-right: 0;
  }
  @media screen and (min-width: 1280) {
    margin-right: 0;
  }
`;
export const Label = styled.label`
  width: 110px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 42px;
  color: #898f9f;

  & span {
    font-size: 11px;
    line-height: 1.2;
    margin-bottom: 4px;
  }
  & .icon {
    position: absolute;
    top: 65%;
    right: 0;
    transform: translateY(-50%);
    &:hover,
    :focus,
    :active {
      background-color: transparent;
    }
  }
  @media screen and (min-width: 768) {
    margin-right: 20px;
  }
  @media screen and (min-width: 1280) {
    margin-right: 0;
  }
`;

export const Pages = styled.input`
  width: 110px;
  height: 42px;
  line-height: 1.21;
  font-size: 14px;
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

    width: 20px;
    height: 20px;
    border-width: thin;
  }
`;
export const ButtonCalendar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;

  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
`;
export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 28px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1278px) {
    margin-top: 28px;
    margin-bottom: 24px;
  }
`;
export const ButtonIcon = styled.button`
  width: 110px;
  height: 42px;
  font-size: 14px;
  line-height: 1.21;
  margin: 0;
  padding: 0;
  border-color: 1px #a6abb9;
  background-color: #e0e5eb;
  &::after {
    content: url(${Polygon});

    :hover {
      border-color: 1px #a6abb9;
    }
    :focus {
      border-color: 1px #a6abb9;
    }
  }
`;
export const Button = styled.button`
  width: 240px;
  height: 40px;
  border-color: #ff6b08;
  background-color: #ff6b08;
  color: #ffffff;
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
export const Statistic = styled.h3`
  font-family: Montserrat;
  text-align: center;
  font-weight: 700;
  line-height: 1.2191;
  color: #242a37;
  margin-top: 24px;
  display: flex;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.2;
  justify-content: center;
  align-items: center;
  margin: 4px;
  &::before,
  ::after {
    content: url(${Line});
    margin-top: -5px;
    margin-left: 13px;
    margin-right: 13px;
  }
  @media screen and (min-width: 768) and (max-width: 1279) {
    &::before {
      content: none;
    }
    &::after {
      content: url(${LineLarge});
      margin-top: -5px;
      margin-left: 8px;
      margin-right: 0;
    }
  }
  @media screen and (min-width: 1280) {
    &::before,
    ::after {
      content: url(${Line});
      margin-top: -5px;
      margin-left: 4px;
      margin-right: 4px;
    }
  }
`;
