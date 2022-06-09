import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { LogoutContent, Text, Buttons, Back, Save } from './LogoutModal.styled';

const LogoutModal = ({ toggleLogoutModal }) => {
  const onlyWidth = useWindowWidth();
  return (
    <LogoutContent>
      <Text>
        The changes you made will be lost if you navigate away from this
        application
      </Text>
      <Buttons>
        <Back onClick={toggleLogoutModal} type="button">
          Cancel
        </Back>
        <Save type="submit">
          {onlyWidth > 768 && 'Leave this app'}
          {onlyWidth < 768 && 'Leave'}
        </Save>
      </Buttons>
    </LogoutContent>
  );
};

export default LogoutModal;
