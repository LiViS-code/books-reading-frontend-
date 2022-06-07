import { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import {
  ModalContainer,
  ContentContainer,
  ContentList,
  Header,
  Motivation,
  Description,
  MotivationBlock,
  DescriptionBlock,
  ContentItem,
} from './LibraryModal.styled';
import { AccentButton } from '../Buttons/AccentButton.styled';
import images from '../../image/svg/symbol-defs.svg';

const LibraryModal = () => {
  const onlyWidth = useWindowWidth();
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  return (
    showModal && (
      <ModalContainer onClose={toggleModal}>
        <ContentContainer>
          <ContentList>
            <ContentItem>
              <Header>Крок 1.</Header>
              <MotivationBlock>
                <svg width="22" height="17">
                  <use href={`${images}#icon-book`}></use>
                </svg>
                <Motivation>Створіть особисту бібліотеку</Motivation>
              </MotivationBlock>
              <DescriptionBlock>
                <svg width="35" height="13">
                  <use href={`${images}#icon-bent-arrow`}></use>
                </svg>
                <Description>
                  Додайте до неї книжки, які маєте намір прочитати.
                </Description>
              </DescriptionBlock>
            </ContentItem>
            <ContentItem>
              <Header>Крок 2.</Header>
              <MotivationBlock>
                <svg width="22" height="17">
                  <use href={`${images}#icon-flag`}></use>
                </svg>
                <Motivation>Сформуйте своє перше тренування</Motivation>
              </MotivationBlock>
              <DescriptionBlock>
                <svg width="35" height="13">
                  <use href={`${images}#icon-bent-arrow`}></use>
                </svg>
                <Description>
                  Визначте ціль, оберіть період, розпочинайте тренування.
                </Description>
              </DescriptionBlock>
            </ContentItem>
          </ContentList>
          {onlyWidth < 768 && (
            <AccentButton onClick={toggleModal}>Ok</AccentButton>
          )}
        </ContentContainer>
      </ModalContainer>
    )
  );
};

export default LibraryModal;
