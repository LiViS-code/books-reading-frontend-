import React from 'react';
import {
  Back,
  NewTraining,
  WellDoneContent,
  Text,
  Svg,
  Icon,
  Buttons,
} from './WellDoneModal.styled';
import images from '../../../image/svg/symbol-defs.svg';

const WellDoneModal = ({ toggleWellDoneModal }) => {
  return (
    <WellDoneContent>
      <Svg>
        <Icon src={`${images}#icon-good`} alt="trumb up" width="44"></Icon>
      </Svg>
      <Text>
        Ти молодчина, але потрібно швидше! Наступного разу тобі все вдасться
      </Text>
      <Buttons>
        <NewTraining type="submit">Новє тренування</NewTraining>
        <Back onClick={toggleWellDoneModal} type="button">
          Назад
        </Back>
      </Buttons>
    </WellDoneContent>
  );
};

export default WellDoneModal;
