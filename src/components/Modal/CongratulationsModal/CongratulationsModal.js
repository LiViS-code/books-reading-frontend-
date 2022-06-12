import React from 'react';
import goodIcon from '../../../image/svg/orange-good.svg';
import {
  Done,
  CongratulationsContent,
  Text,
  Svg,
  Icon,
} from './CongratulationsModal.styled';

const CongratulationsModal = ({ toggleCongratulationsModal }) => {
  return (
    <CongratulationsContent>
      <Svg>
        <Icon src={goodIcon} alt="trumb up" width="44"></Icon>
      </Svg>
      <Text>Вітаю! Ще одна книга прочитана.</Text>
      <Done onClick={toggleCongratulationsModal} type="button">
        Готово
      </Done>
    </CongratulationsContent>
  );
};

export default CongratulationsModal;
