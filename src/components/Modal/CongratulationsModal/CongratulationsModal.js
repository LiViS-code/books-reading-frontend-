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
import { closeCongratModal } from '../../../redux/books/books-operations';

const CongratulationsModal = ({ toggleCongratulationsModal }) => {
  const dispatch = useDispatch();
  return (
    <CongratulationsContent>
      <Svg>
        <Icon src={goodIcon} alt="trumb up" width="44"></Icon>
      </Svg>
      <Text>Вітаю! Ще одна книга прочитана.</Text>
      <Done onClick={() => dispatch(closeCongratModal())} type="button">
        Готово
      </Done>
    </CongratulationsContent>
  );
};

export default CongratulationsModal;
