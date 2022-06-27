import React from 'react';
import BookData from './BookData';
import { Container, Icon } from './index';
import sprite from './symbol-defs.svg';
import { ButtonResume } from './index';

import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import ResumeModal from '../../components/Modal/ResumeModal/ResumeModal';

export default function BookCard({ book }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(state => !state);
  };

  const { wish } = book;

  return (
    <Container>
      {wish === 'Reading now' ? (
        <Icon width={22} height={17}>
          <use href={`${sprite}#yellow_book`} />
        </Icon>
      ) : (
        <Icon width={22} height={17}>
          <use href={`${sprite}#grey_book`} />
        </Icon>
      )}

      <BookData data={book}></BookData>

      {wish === 'Already read' && (
        <>
          <ButtonResume type="button" onClick={toggleModal}>
            Резюме
          </ButtonResume>
          {showModal && (
            <Modal onClose={toggleModal}>
              <ResumeModal toggleModal={toggleModal}></ResumeModal>
            </Modal>
          )}
        </>
      )}
    </Container>
  );
}
