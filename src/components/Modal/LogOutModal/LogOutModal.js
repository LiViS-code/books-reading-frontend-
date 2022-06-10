import React from 'react';
import { Buttons, Back, Save } from '../ResumeModal/ResumeModal.styled';
import { LogoutContent, Text } from './LogOutModal.styled';

const LogoutModal = ({ toggleLogoutModal }) => {
  return (
    <LogoutContent>
      <Text>Якщо Ви вийдете з програми незбережені дані будуть втрачені</Text>
      <Buttons>
        <Back onClick={toggleLogoutModal} type="button">
          Відміна
        </Back>
        <Save type="submit">Вийти</Save>
      </Buttons>
    </LogoutContent>
  );
};

export default LogoutModal;
