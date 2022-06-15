import React, { useState } from 'react';
import { Button, Text } from './LogOut.styled';
import Modal from '../../Modal/Modal';
import LogoutModal from '../../Modal/LogOutModal/LogOutModal';

export default function LogOut() {
  const [logoutModal, setLogoutModal] = useState(false);

  const toggleLogoutModal = () => {
    setLogoutModal(state => !state);
  };

  return (
    <>
      <Button onClick={toggleLogoutModal} type="button">
        <Text>Вихід</Text>
      </Button>
      {logoutModal && (
        <Modal onClose={toggleLogoutModal}>
          <LogoutModal toggleLogoutModal={toggleLogoutModal} />
        </Modal>
      )}
    </>
  );
}
