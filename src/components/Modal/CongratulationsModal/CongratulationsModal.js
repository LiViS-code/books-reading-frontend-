import React from 'react';
import { useDispatch } from 'react-redux';
import goodIcon from '../../../image/svg/orange-good.svg';
import {
  Done,
  CongratulationsContent,
  Text,
  Svg,
  Icon,
} from './CongratulationsModal.styled';
import { changeBookStatus } from '../../../redux/books/books-operations';

const CongratulationsModal = ({ toggleCongratulationsModal, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeBookStatus(id));
    toggleCongratulationsModal(false);
  };
  return (
    <CongratulationsContent>
      <Svg>
        <Icon src={goodIcon} alt="trumb up" width="44"></Icon>
      </Svg>
      <Text>Вітаю! Ще одна книга прочитана.</Text>
      <Done onClick={handleClick} type="button">
        Готово
      </Done>
    </CongratulationsContent>
  );
};

export default CongratulationsModal;
