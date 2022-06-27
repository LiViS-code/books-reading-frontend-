import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Back,
  NewTraining,
  WellDoneContent,
  Text,
  Svg,
  Icon,
  Buttons,
} from './WellDoneModal.styled';
import images from '../../../image/good.svg';
import { startNewTraining } from '../../../redux/books/books-operations';

const WellDoneModal = ({ toggleWellDoneModal, text }) => {
  const dispatch = useDispatch();
  return (
    <WellDoneContent>
      <Svg>
        <Icon src={`${images}`} alt="trumb up" width={50} height={46}></Icon>
      </Svg>
      <Text>{text}</Text>
      <Buttons>
        <NewTraining type="submit" onClick={() => dispatch(startNewTraining())}>
          Нове тренування
        </NewTraining>
        <Back onClick={() => toggleWellDoneModal(false)} type="button">
          Назад
        </Back>
      </Buttons>
    </WellDoneContent>
  );
};

export default WellDoneModal;
