import React from 'react';
import { useDispatch } from 'react-redux';
import { Buttons, Back, Save } from '../ResumeModal/ResumeModal.styled';
import { LogoutContent, Text } from './LogOutModal.styled';
import operations from '../../../redux/asyncThunks';

const LogoutModal = ({ toggleLogoutModal }) => {
  const dispatch = useDispatch();
  return (
    <LogoutContent>
      <Text>Якщо Ви вийдете з програми незбережені дані будуть втрачені</Text>
      <Buttons>
        <Back onClick={toggleLogoutModal} type="button">
          Відміна
        </Back>
        <Save
          type="submit"
          onClick={() => {
            dispatch(operations.logOut());
            toggleLogoutModal();
          }}
        >
          Вийти
        </Save>
      </Buttons>
    </LogoutContent>
  );
};

export default LogoutModal;
