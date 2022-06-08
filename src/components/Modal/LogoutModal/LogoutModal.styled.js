import styled from '@emotion/styled';

export const LogoutContent = styled.div`
  width: 280px;
  height: 222px;

  @media screen and (min-width: 768px) {
    width: 394px;
    height: 204px;
  }
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #242a37;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Back = styled.button`
  margin-top: 0;
  padding: 0;
  margin-right: 16px;
  box-sizing: border-box;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;
  text-align: center;
  cursor: pointer;

  width: 98px;
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

  @media screen and (min-width: 768px) {
    width: 130px;
    height: 40px;
    margin-right: 28px;
  }
`;
export const Save = styled.button`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;

  width: 98px;
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
    width: 130px;
    height: 40px;
  }
`;
