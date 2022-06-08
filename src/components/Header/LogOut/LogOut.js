import React, { useState } from 'react';
import { Button, Text, Div, Gabionade } from './LogOut.styled';
import iconlogout from '../../../image/svg/iconlogout.svg';
import Modal from '../../Modal/Modal';
import LogoutModal from '../../Modal/LogoutModal/LogoutModal';

export default function LogOut() {
  const [logoutModal, setLogoutModal] = useState(false);

  const toggleLogoutModal = () => {
    setLogoutModal(state => !state);
  };

  return (
    <Div>
      <Gabionade src={iconlogout} alt="icon logout" />
      <Button type="button" onClick={toggleLogoutModal}>
        <Text>Вихід</Text>
      </Button>
      {logoutModal && (
        <Modal onClose={toggleLogoutModal}>
          <LogoutModal toggleLogoutModal={toggleLogoutModal} />
        </Modal>
      )}
    </Div>
  );
}
