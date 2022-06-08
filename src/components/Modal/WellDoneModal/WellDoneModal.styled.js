import styled from '@emotion/styled';

export const WellDoneContent = styled.div`
  width: 280px;
  height: 358px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 394px;
    height: 286px;
  }
`;
export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
  padding-left: 64px;
  padding-right: 64px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #242a37;

  @media screen and (min-width: 768px) {
    padding-left: 52px;
    padding-right: 52px;
    margin-bottom: 24px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Svg = styled.div`
  padding-top: 44px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  fill: #a6abb9;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
`;

export const Icon = styled.img`
  width: 54px;
  height: 54px;
`;
export const Back = styled.button`
  margin-top: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;
  text-align: center;
  cursor: pointer;

  width: 152px;
  height: 40px;
  border: 1px solid #242a37;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus {
    color: #ffffff;
    background: #ff6b08;
    border: 1px solid #ff6b08;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 250ms ease;
  }
`;
export const NewTraining = styled.button`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  box-sizing: border-box;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;

  width: 152px;
  height: 40px;
  background: #ff6b08;
  border: 1px solid #ff6b08;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus {
    color: #242a37;
    border: 1px solid #242a37;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 250ms ease;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 32px;
  }
`;
